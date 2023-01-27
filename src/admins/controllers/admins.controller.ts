import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
//import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { AdminsService } from '../services/admins.service';
import { CreateAdminDto, UpdateAdminDto } from '../dto/admin.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Requires } from 'src/auth/decorators/requires.decotator';
import { Permissions } from 'src/auth/models/permission.model';
import { Public } from 'src/auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  create(@Body() payload: CreateAdminDto) {
    return this.adminsService.create(payload);
  }

  @Public()
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @Requires(Permissions.READ_USERS)
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.adminsService.findOneWithRelations(uid);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.adminsService.findByEmail(email);
  }

  @Requires(Permissions.MANAGE_USERS, Permissions.UPDATE_USERS)
  @Post(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
