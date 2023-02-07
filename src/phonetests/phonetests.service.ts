import { Injectable } from '@nestjs/common';
import { CreatePhonetestDto } from './dto/create-phonetest.dto';
import { UpdatePhonetestDto } from './dto/update-phonetest.dto';

@Injectable()
export class PhonetestsService {
  create(createPhonetestDto: CreatePhonetestDto) {
    return 'This action adds a new phonetest';
  }

  findAll() {
    return `This action returns all phonetests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phonetest`;
  }

  update(id: number, updatePhonetestDto: UpdatePhonetestDto) {
    return `This action updates a #${id} phonetest`;
  }

  remove(id: number) {
    return `This action removes a #${id} phonetest`;
  }
}
