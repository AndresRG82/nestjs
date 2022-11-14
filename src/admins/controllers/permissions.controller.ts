import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

//import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { PermissionsService } from '../services/permissions.service';
import {
  CreatePermissionDto,
  UpdatePermissionDto,
} from '../dto/permissions.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  //@UseGuards(ApiKeyGuard)
  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.permissionsService.findOne(id);
  }

  @Get('permissions/:permission_name')
  findByEmail(@Param('permission_name') permission_name: string) {
    return this.permissionsService.findByName(permission_name);
  }

  @Post(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.permissionsService.remove(id);
  }
}
