import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevicediscountService } from './devicediscount.service';
import { CreateDevicediscountDto } from './dto/create-devicediscount.dto';
import { UpdateDevicediscountDto } from './dto/update-devicediscount.dto';

@Controller('devicediscount')
export class DevicediscountController {
  constructor(private readonly devicediscountService: DevicediscountService) {}

  @Post()
  create(@Body() createDevicediscountDto: CreateDevicediscountDto) {
    return this.devicediscountService.create(createDevicediscountDto);
  }

  @Get()
  findAll() {
    return this.devicediscountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicediscountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDevicediscountDto: UpdateDevicediscountDto,
  ) {
    return this.devicediscountService.update(+id, updateDevicediscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicediscountService.remove(+id);
  }
}
