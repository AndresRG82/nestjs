import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnsupporteddevicesService } from './unsupporteddevices.service';
import { CreateUnsupporteddeviceDto } from './dto/create-unsupporteddevice.dto';
import { UpdateUnsupporteddeviceDto } from './dto/update-unsupporteddevice.dto';

@Controller('unsupporteddevices')
export class UnsupporteddevicesController {
  constructor(
    private readonly unsupporteddevicesService: UnsupporteddevicesService,
  ) {}

  @Post()
  create(@Body() createUnsupporteddeviceDto: CreateUnsupporteddeviceDto) {
    return this.unsupporteddevicesService.create(createUnsupporteddeviceDto);
  }

  @Get()
  findAll() {
    return this.unsupporteddevicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unsupporteddevicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnsupporteddeviceDto: UpdateUnsupporteddeviceDto,
  ) {
    return this.unsupporteddevicesService.update(
      +id,
      updateUnsupporteddeviceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unsupporteddevicesService.remove(+id);
  }
}
