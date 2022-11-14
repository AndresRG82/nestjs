import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
//import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { AdminsService } from '../services/admins.service';
import { CreateAdminDto, UpdateAdminDto } from '../dto/admin.dto';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/roles.model';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Requires } from 'src/auth/decorators/requires.decotator';
import { Permissions } from 'src/auth/models/permission.model';
import { Public } from 'src/auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @Requires(Permissions.READ_USERS)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.findOneWithRelations(id);
  }

  @Roles(Role.SUPERADMIN, Role.AMDIN)
  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.adminsService.findByEmail(email);
  }

  @Requires(Permissions.MANAGE_USERS, Permissions.UPDATE_USERS)
  @Post(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminsService.update(id, updateAdminDto);
  }

  @Roles(Role.SUPERADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
