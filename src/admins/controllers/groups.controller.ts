import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

//import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { GroupsService } from '../services/groups.service';
import { CreateGroupDto, UpdateGroupDto } from '../dto/admin_group.dto';

@Controller('adminsGroups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(id);
  }

  @Get('name/:group_name')
  findByName(@Param('group_name') group_name: string) {
    return this.groupsService.findByName(group_name);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(id);
  }
}
