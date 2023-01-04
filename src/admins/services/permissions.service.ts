import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Permissions } from '../entities/permissions.entity';
import {
  CreatePermissionDto,
  UpdatePermissionDto,
} from '../dto/permissions.dto';
import { GroupsService } from './groups.service';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permissions)
    private permissionsRepo: Repository<Permissions>,
    private groupsService: GroupsService,
  ) {}

  findAll() {
    return this.permissionsRepo.find({ relations: ['group'] });
  }

  async create(data: CreatePermissionDto) {
    const newPermission = this.permissionsRepo.create(data);
    const exist = await this.searchByName(newPermission.permission);
    if (exist.length != 0) {
      throw new NotAcceptableException('The permission already exist');
    }
    if (data.group_id) {
      const group = await this.groupsService.findById(data.group_id);
      newPermission.group = group;
    }
    return this.permissionsRepo.save(newPermission);
  }

  async searchByName(permission) {
    return this.permissionsRepo.findBy({ permission });
  }

  async findOne(id: string) {
    const permission = await this.permissionsRepo.find({
      where: {
        id: id,
      },
      relations: ['group'],
    });
    if (!permission) {
      throw new NotFoundException(`Permission #${id} is not found`);
    }
    return permission;
  }

  async findByName(permission: string) {
    const exist = await this.permissionsRepo.findOneBy({ permission });
    if (!exist) {
      throw new NotFoundException(
        "the permit doesn't match any element in the table",
      );
    }
    return exist;
  }

  async update(id: string, payload: UpdatePermissionDto) {
    const permission = await this.permissionsRepo.findOneBy({ id });
    if (!permission) {
      throw new NotFoundException(
        'Could not update data, permission id not found.',
      );
    }
    const updated_permission = this.permissionsRepo.merge(permission, payload);
    if (!payload.group_id) {
      throw new BadRequestException('Please, confirm the body fields');
    }
    const group = await this.groupsService.findById(payload.group_id);
    updated_permission.group = group;
    return this.permissionsRepo.save(updated_permission);
  }

  async remove(id: string) {
    const permission = await this.findOne(id);
    if (!permission) {
      throw new NotFoundException(
        `Could not delete permission #${id}, permission not found`,
      );
    }
    return this.permissionsRepo.delete(id);
  }
}
