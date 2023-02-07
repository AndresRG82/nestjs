import { Injectable } from '@nestjs/common';
import { CreatePlatformtestDto } from './dto/create-platformtest.dto';
import { UpdatePlatformtestDto } from './dto/update-platformtest.dto';

@Injectable()
export class PlatformtestService {
  create(createPlatformtestDto: CreatePlatformtestDto) {
    return 'This action adds a new platformtest';
  }

  findAll() {
    return `This action returns all platformtest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} platformtest`;
  }

  update(id: number, updatePlatformtestDto: UpdatePlatformtestDto) {
    return `This action updates a #${id} platformtest`;
  }

  remove(id: number) {
    return `This action removes a #${id} platformtest`;
  }
}
