import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Deeplink } from 'node-deeplink';

import { CodesService } from '../services/codes.service';
import { CreateCodeDto, UpdateCodeDto } from '../dto/codes.dto';
import { CreateCodeGroupDto, UpdateCodeGroupDto } from '../dto/codes_group.dto';
import { DeeplinkPayload } from '../Models/deeplink_payload.model';

@Controller('discounts')
export class CodesController {
  constructor(
    private readonly codesService: CodesService,
    private deeplink: Deeplink,
  ) {}

  @Post('add')
  create(@Body() payload: CreateCodeGroupDto) {
    return this.codesService.create(payload);
  }

  @Post('link')
  generateDeeplink(@Body() payload: DeeplinkPayload): string {
    return this.deeplink.create({
      url: 'myapp://path',
      path: '/path',
      appName: 'My App',
      packageName: 'com.myapp',
    });
  }

  @Post()
  findGroup(@Body() payload) {
    return this.codesService.findGroupWithRelations(payload.name);
  }

  @Get()
  findAll() {
    return this.codesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeDto: UpdateCodeDto) {
    return this.codesService.update(+id, updateCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codesService.remove(+id);
  }
}
