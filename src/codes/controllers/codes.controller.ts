import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import * as Deeplink from 'node-deeplink';

import { CodesService } from '../services/codes.service';
import { CreateCodeDto, UpdateCodeDto } from '../dto/codes.dto';
import { CreateCodeGroupDto, UpdateCodeGroupDto } from '../dto/codes_group.dto';
import { DeeplinkPayload } from '../Models/deeplink_payload.model';

@Controller('discounts')
export class CodesController {
  constructor(private readonly codesService: CodesService) {}

  @Post('add')
  create(@Body() payload: CreateCodeGroupDto) {
    return this.codesService.create(payload);
  }
  @Post('create')
  createCode(@Body() payload: CreateCodeGroupDto) {
    return this.create(payload);
  }

  @Post('link')
  async generateDeeplink() {
    const options = {
      url: 'myapp://path',
      fallback: 'coverme://path',
      path: '/path',
      appName: 'Coverme',
      packageName: 'com.trust.coverme_diagnostic',
    };
    return Deeplink({ fallback: 'https://google.cl' });
  }

  @Post()
  findGroup(@Body() payload) {
    return this.codesService.findGroupWithRelations(payload.name);
  }

  @Post('code/burned')
  burnCode(@Body() payload) {
    return this.codesService.burnCode(payload);
  }

  @Get()
  findAll() {
    return this.codesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codesService.findOne(id);
  }

  @Get('code/get/:id')
  findCodes(@Param('id') id: string) {
    return this.codesService.findGroupByID(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codesService.remove(id);
  }
}
