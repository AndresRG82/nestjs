import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CertificatedevicetestService } from './certificatedevicetest.service';
import { CreateCertificatedevicetestDto } from './dto/create-certificatedevicetest.dto';
import { UpdateCertificatedevicetestDto } from './dto/update-certificatedevicetest.dto';

@Controller('certificatedevicetest')
export class CertificatedevicetestController {
  constructor(
    private readonly certificatedevicetestService: CertificatedevicetestService,
  ) {}

  @Post()
  create(
    @Body() createCertificatedevicetestDto: CreateCertificatedevicetestDto,
  ) {
    return this.certificatedevicetestService.create(
      createCertificatedevicetestDto,
    );
  }

  @Get()
  findAll() {
    return this.certificatedevicetestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatedevicetestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCertificatedevicetestDto: UpdateCertificatedevicetestDto,
  ) {
    return this.certificatedevicetestService.update(
      +id,
      updateCertificatedevicetestDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatedevicetestService.remove(+id);
  }
}
