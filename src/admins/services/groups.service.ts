import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin_group } from '../entities/admin_group.entity';
import { CreateGroupDto, UpdateGroupDto } from '../dto/admin_group.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Admin_group) private groupsRepo: Repository<Admin_group>,
  ) {}

  async findAll() {
    const allGroups = await this.groupsRepo.find();
    return allGroups;
  }

  async create(data: CreateGroupDto) {
    const newGroup = this.groupsRepo.create(data);
    const exist = await this.searchByName(newGroup.group_name);
    if (exist.length != 0) {
      throw new NotAcceptableException('The email is already in use');
    }
    return this.groupsRepo.save(newGroup);
  }

  async searchByName(group_name) {
    return this.groupsRepo.findBy({ group_name });
  }

  async findById(id: number) {
    const group = await this.groupsRepo.findOneBy({ id });
    if (!group) {
      throw new NotFoundException(`Group #${id} is not found`);
    }
    return group;
  }

  async findOne(id: number) {
    const group = await this.groupsRepo.findOne({
      where: { id: id },
      relations: ['permissions'],
    });
    if (!group) {
      throw new NotFoundException(`Group #${id} is not found`);
    }
    return group;
  }

  async findByName(group_name: string) {
    const group = await this.groupsRepo.findOneBy({ group_name });
    if (!group) {
      throw new NotFoundException(
        "the group name doesn't match with any registered group",
      );
    }
    return group;
  }

  async findByNameWithRelations(group_name: string) {
    const group = await this.groupsRepo.findOne({
      where: { group_name: group_name },
      relations: ['permissions'],
    });
    if (!group) {
      throw new NotFoundException(
        "the group name doesn't match with any registered group",
      );
    }
    return group;
  }

  async update(id: number, payload: UpdateGroupDto) {
    const group = await this.findById(id);
    if (!group) {
      throw new NotFoundException('Could not update data, group id not found.');
    }
    const updated_group = this.groupsRepo.merge(group, payload);
    return this.groupsRepo.save(updated_group);
  }

  async remove(id: number) {
    const group = await this.findOne(id);
    if (!group) {
      throw new NotFoundException(
        `Could not delete group #${id}, group not found`,
      );
    }
    return this.groupsRepo.delete(id);
  }
}
