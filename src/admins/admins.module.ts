import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admins } from './entities/admin.entity';
import { AdminsService } from './services/admins.service';
import { AdminsController } from './controllers/admins.controller';

import { Admin_group } from './entities/admin_group.entity';
import { GroupsService } from './services/groups.service';
import { GroupsController } from './controllers/groups.controller';

import { Permissions } from './entities/permissions.entity';
import { PermissionsService } from './services/permissions.service';
import { PermissionsController } from './controllers/permissions.controller';
//importar entidad, controlador y servicio de group y permissions
@Module({
  imports: [TypeOrmModule.forFeature([Admins, Admin_group, Permissions])],
  controllers: [AdminsController, PermissionsController, GroupsController],
  providers: [AdminsService, GroupsService, PermissionsService],
  exports: [AdminsService],
})
export class AdminsModule {}
