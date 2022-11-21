import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Admins } from '../entities/admin.entity';
import { CreateAdminDto, UpdateAdminDto } from '../dto/admin.dto';
import { GroupsService } from './groups.service';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admins) private adminsRepo: Repository<Admins>,
    private groupsService: GroupsService,
  ) {}

  findAll() {
    return this.adminsRepo.find();
  }

  async create(data: CreateAdminDto) {
    const newAdmin = this.adminsRepo.create(data);
    const exist = await this.alredyExist(newAdmin.email);
    if (exist.length != 0) {
      throw new NotAcceptableException('The email is already in use');
    }
    const hashPassword = await bcrypt.hash(newAdmin.password, 11);
    newAdmin.password = hashPassword;
    if (data.group_id) {
      const group = await this.groupsService.findOne(data.group_id);
      newAdmin.group = group;
    }
    return this.adminsRepo.save(newAdmin);
  }

  async alredyExist(email) {
    return this.adminsRepo.findBy({ email });
  }

  async findOne(id: string) {
    const admin = await this.adminsRepo.findOneBy({ id });
    if (!admin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return admin;
  }

  async findOneWithRelations(id: string) {
    const admin = await this.adminsRepo.find({
      where: { id: id },
      relations: ['group'],
    });
    if (!admin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return admin;
  }
  async findByEmailWithRelations(email) {
    const admin = await this.adminsRepo.findOne({
      where: { email: email },
      relations: ['group'],
    });
    if (!admin) {
      throw new NotFoundException(`Admin #${email} not found`);
    }
    return admin;
  }

  async findByEmail(email: string) {
    const admin = await this.adminsRepo.findOneBy({ email });
    if (!admin) {
      throw new NotFoundException(
        "the email doesn't match with any registered admin",
      );
    }
    return admin;
  }

  async update(id: string, payload: UpdateAdminDto) {
    const admin = await this.findOne(id);
    if (!admin) {
      throw new NotFoundException(
        'Could not update data, administrator id not found.',
      );
    }
    if (payload.group_id) {
      const group = await this.groupsService.findById(payload.group_id);
      admin.group = group;
    }
    const updated_admin = this.adminsRepo.merge(admin, payload);
    return this.adminsRepo.save(updated_admin);
  }

  async remove(id: string) {
    const admin = await this.findOne(id);
    if (!admin) {
      throw new NotFoundException(
        `Could not delete admin #${id}, admin not found`,
      );
    }
    return this.adminsRepo.delete(id);
  }
}
