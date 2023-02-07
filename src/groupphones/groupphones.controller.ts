import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupphonesService } from './groupphones.service';
import { CreateGroupphoneDto } from './dto/create-groupphone.dto';
import { UpdateGroupphoneDto } from './dto/update-groupphone.dto';

@Controller('groupphones')
export class GroupphonesController {
  constructor(private readonly groupphonesService: GroupphonesService) {}

  @Post()
  create(@Body() createGroupphoneDto: CreateGroupphoneDto) {
    return this.groupphonesService.create(createGroupphoneDto);
  }

  @Get()
  findAll() {
    return this.groupphonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupphonesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupphoneDto: UpdateGroupphoneDto,
  ) {
    return this.groupphonesService.update(+id, updateGroupphoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupphonesService.remove(+id);
  }
}
