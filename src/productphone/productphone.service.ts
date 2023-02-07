import { Injectable } from '@nestjs/common';
import { CreateProductphoneDto } from './dto/create-productphone.dto';
import { UpdateProductphoneDto } from './dto/update-productphone.dto';

@Injectable()
export class ProductphoneService {
  create(createProductphoneDto: CreateProductphoneDto) {
    return 'This action adds a new productphone';
  }

  findAll() {
    return `This action returns all productphone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productphone`;
  }

  update(id: number, updateProductphoneDto: UpdateProductphoneDto) {
    return `This action updates a #${id} productphone`;
  }

  remove(id: number) {
    return `This action removes a #${id} productphone`;
  }
}
