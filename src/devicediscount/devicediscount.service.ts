import { Injectable } from '@nestjs/common';
import { CreateDevicediscountDto } from './dto/create-devicediscount.dto';
import { UpdateDevicediscountDto } from './dto/update-devicediscount.dto';

@Injectable()
export class DevicediscountService {
  create(createDevicediscountDto: CreateDevicediscountDto) {
    return 'This action adds a new devicediscount';
  }

  findAll() {
    return `This action returns all devicediscount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devicediscount`;
  }

  update(id: number, updateDevicediscountDto: UpdateDevicediscountDto) {
    return `This action updates a #${id} devicediscount`;
  }

  remove(id: number) {
    return `This action removes a #${id} devicediscount`;
  }
}
