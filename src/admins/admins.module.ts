import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Users } from './entities/users.entity';
import { AdminsService } from './services/admins.service';
import { AdminsController } from './controllers/admins.controller';

import { User_group } from './entities/user_group.entity';
import { GroupsService } from './services/groups.service';
import { GroupsController } from './controllers/groups.controller';

import { Permissions } from './entities/permissions.entity';
import { PermissionsService } from './services/permissions.service';
import { PermissionsController } from './controllers/permissions.controller';
import { SessionModule } from 'src/session/session.module';
//importar entidad, controlador y servicio de group y permissions
@Module({
  imports: [
    TypeOrmModule.forFeature([Users, User_group, Permissions]),
    SessionModule,
  ],
  controllers: [AdminsController, PermissionsController, GroupsController],
  providers: [AdminsService, GroupsService, PermissionsService],
  exports: [AdminsService, GroupsService],
})
export class AdminsModule {}
