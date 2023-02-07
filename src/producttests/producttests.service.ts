import { Injectable } from '@nestjs/common';
import { CreateProducttestDto } from './dto/create-producttest.dto';
import { UpdateProducttestDto } from './dto/update-producttest.dto';

@Injectable()
export class ProducttestsService {
  create(createProducttestDto: CreateProducttestDto) {
    return 'This action adds a new producttest';
  }

  findAll() {
    return `This action returns all producttests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producttest`;
  }

  update(id: number, updateProducttestDto: UpdateProducttestDto) {
    return `This action updates a #${id} producttest`;
  }

  remove(id: number) {
    return `This action removes a #${id} producttest`;
  }
}
