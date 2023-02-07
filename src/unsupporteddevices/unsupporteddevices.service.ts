import { Injectable } from '@nestjs/common';
import { CreateUnsupporteddeviceDto } from './dto/create-unsupporteddevice.dto';
import { UpdateUnsupporteddeviceDto } from './dto/update-unsupporteddevice.dto';

@Injectable()
export class UnsupporteddevicesService {
  create(createUnsupporteddeviceDto: CreateUnsupporteddeviceDto) {
    return 'This action adds a new unsupporteddevice';
  }

  findAll() {
    return `This action returns all unsupporteddevices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unsupporteddevice`;
  }

  update(id: number, updateUnsupporteddeviceDto: UpdateUnsupporteddeviceDto) {
    return `This action updates a #${id} unsupporteddevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} unsupporteddevice`;
  }
}
