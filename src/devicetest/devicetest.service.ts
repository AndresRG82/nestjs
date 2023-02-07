import { Injectable } from '@nestjs/common';
import { CreateDevicetestDto } from './dto/create-devicetest.dto';
import { UpdateDevicetestDto } from './dto/update-devicetest.dto';

@Injectable()
export class DevicetestService {
  create(createDevicetestDto: CreateDevicetestDto) {
    return 'This action adds a new devicetest';
  }

  findAll() {
    return `This action returns all devicetest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devicetest`;
  }

  update(id: number, updateDevicetestDto: UpdateDevicetestDto) {
    return `This action updates a #${id} devicetest`;
  }

  remove(id: number) {
    return `This action removes a #${id} devicetest`;
  }
}
