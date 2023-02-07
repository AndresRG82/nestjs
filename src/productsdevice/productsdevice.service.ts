import { Injectable } from '@nestjs/common';
import { CreateProductsdeviceDto } from './dto/create-productsdevice.dto';
import { UpdateProductsdeviceDto } from './dto/update-productsdevice.dto';

@Injectable()
export class ProductsdeviceService {
  create(createProductsdeviceDto: CreateProductsdeviceDto) {
    return 'This action adds a new productsdevice';
  }

  findAll() {
    return `This action returns all productsdevice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsdevice`;
  }

  update(id: number, updateProductsdeviceDto: UpdateProductsdeviceDto) {
    return `This action updates a #${id} productsdevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsdevice`;
  }
}
