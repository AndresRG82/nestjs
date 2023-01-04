import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { Users } from '../admins/entities/users.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { GroupsService } from 'src/admins/services/groups.service';
import { PayloadToken } from 'src/auth/models/token.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
    private groupsService: GroupsService,
    private jwtService: JwtService,
  ) {}

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const alreadyExists = await this.findByEmail(data.email);
    if (alreadyExists != null) {
      throw new BadRequestException('The email is already taken');
    }
    if (data.group_id) {
      const group = await this.groupsService.findOne(data.group_id);
      newUser.group = group;
    }
    if (newUser.password) {
      const hashPassword = await bcrypt.hash(newUser.password, 11);
      newUser.password = hashPassword;
    }
    return this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async findByToken(token: string) {
    const decodedToken = (await this.jwtService.decode(token)) as PayloadToken;
    const user = await this.findOne(decodedToken.id);
    if (user == null) {
      return new NotFoundException('User not found');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: { email: email },
      relations: ['group'],
    });
    if (!user) {
      return null;
    }
    return user;
  }

  async findOneWithRelations(id: string) {
    const user = await this.userRepo.findOne({
      where: { id: id },
      relations: ['group'],
    });
    if (!user) {
      throw new NotFoundException(`User "${id}" not found`);
    }
    return user;
  }

  async update(id: string, payload: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.userRepo.merge(user, payload);
    return this.userRepo.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    return this.userRepo.delete(id);
  }
}
