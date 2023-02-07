import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevicetestService } from './devicetest.service';
import { CreateDevicetestDto } from './dto/create-devicetest.dto';
import { UpdateDevicetestDto } from './dto/update-devicetest.dto';

@Controller('devicetest')
export class DevicetestController {
  constructor(private readonly devicetestService: DevicetestService) {}

  @Post()
  create(@Body() createDevicetestDto: CreateDevicetestDto) {
    return this.devicetestService.create(createDevicetestDto);
  }

  @Get()
  findAll() {
    return this.devicetestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicetestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDevicetestDto: UpdateDevicetestDto,
  ) {
    return this.devicetestService.update(+id, updateDevicetestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicetestService.remove(+id);
  }
}
