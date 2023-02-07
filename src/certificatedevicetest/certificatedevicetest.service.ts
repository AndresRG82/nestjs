import { Injectable } from '@nestjs/common';
import { CreateCertificatedevicetestDto } from './dto/create-certificatedevicetest.dto';
import { UpdateCertificatedevicetestDto } from './dto/update-certificatedevicetest.dto';

@Injectable()
export class CertificatedevicetestService {
  create(createCertificatedevicetestDto: CreateCertificatedevicetestDto) {
    return 'This action adds a new certificatedevicetest';
  }

  findAll() {
    return `This action returns all certificatedevicetest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} certificatedevicetest`;
  }

  update(
    id: number,
    updateCertificatedevicetestDto: UpdateCertificatedevicetestDto,
  ) {
    return `This action updates a #${id} certificatedevicetest`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificatedevicetest`;
  }
}
