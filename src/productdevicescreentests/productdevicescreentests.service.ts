import { Injectable } from '@nestjs/common';
import { CreateProductdevicescreentestDto } from './dto/create-productdevicescreentest.dto';
import { UpdateProductdevicescreentestDto } from './dto/update-productdevicescreentest.dto';

@Injectable()
export class ProductdevicescreentestsService {
  create(createProductdevicescreentestDto: CreateProductdevicescreentestDto) {
    return 'This action adds a new productdevicescreentest';
  }

  findAll() {
    return `This action returns all productdevicescreentests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productdevicescreentest`;
  }

  update(
    id: number,
    updateProductdevicescreentestDto: UpdateProductdevicescreentestDto,
  ) {
    return `This action updates a #${id} productdevicescreentest`;
  }

  remove(id: number) {
    return `This action removes a #${id} productdevicescreentest`;
  }
}
