import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { User_group } from '../entities/user_group.entity';
import { Permissions } from '../entities/permissions.entity';
import { CreateGroupDto, UpdateGroupDto } from '../dto/admin_group.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(User_group) private groupsRepo: Repository<User_group>,
    @InjectRepository(Permissions)
    private permissionsRepo: Repository<Permissions>,
  ) {}

  async findAll() {
    const allGroups = await this.groupsRepo.find();
    return allGroups;
  }

  async create(data: CreateGroupDto) {
    const newGroup = this.groupsRepo.create(data);
    const exist = await this.searchByName(newGroup.group_name);
    if (exist.length != 0) {
      throw new NotAcceptableException('The group already exists');
    }
    return this.groupsRepo.save(newGroup);
  }

  async searchByName(group_name) {
    return this.groupsRepo.findBy({ group_name });
  }

  async findById(id: string) {
    const group = await this.groupsRepo.findOneBy({ id });
    if (!group) {
      throw new NotFoundException(`Group #${id} is not found`);
    }
    return group;
  }

  async findOne(id: string) {
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

  async update(id: string, payload: UpdateGroupDto) {
    const group = await this.findById(id);
    if (!group) {
      throw new NotFoundException('Could not update data, group id not found.');
    }
    if (payload.permissions_id != null) {
      const permissions = await this.permissionsRepo.findBy({
        id: In(payload.permissions_id),
      });
      if (!permissions) {
        throw new BadRequestException(
          "The permissions ID's do not match any permission registered in the database.",
        );
      }
      const updated_group = this.groupsRepo.merge(group, payload);
      updated_group.permissions = permissions;
      return this.groupsRepo.save(updated_group);
    }
    if (payload.group_name != null) {
      const updated_group = this.groupsRepo.merge(group, payload);
      return this.groupsRepo.save(updated_group);
    }
  }

  async remove(id: string) {
    const group = await this.findOne(id);
    if (!group) {
      throw new NotFoundException(
        `Could not delete group #${id}, group not found`,
      );
    }
    return this.groupsRepo.delete(id);
  }
}
