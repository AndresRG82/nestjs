import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsdeviceService } from './productsdevice.service';
import { CreateProductsdeviceDto } from './dto/create-productsdevice.dto';
import { UpdateProductsdeviceDto } from './dto/update-productsdevice.dto';

@Controller('productsdevice')
export class ProductsdeviceController {
  constructor(private readonly productsdeviceService: ProductsdeviceService) {}

  @Post()
  create(@Body() createProductsdeviceDto: CreateProductsdeviceDto) {
    return this.productsdeviceService.create(createProductsdeviceDto);
  }

  @Get()
  findAll() {
    return this.productsdeviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsdeviceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductsdeviceDto: UpdateProductsdeviceDto,
  ) {
    return this.productsdeviceService.update(+id, updateProductsdeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsdeviceService.remove(+id);
  }
}
