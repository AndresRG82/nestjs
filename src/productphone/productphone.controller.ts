import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductphoneService } from './productphone.service';
import { CreateProductphoneDto } from './dto/create-productphone.dto';
import { UpdateProductphoneDto } from './dto/update-productphone.dto';

@Controller('productphone')
export class ProductphoneController {
  constructor(private readonly productphoneService: ProductphoneService) {}

  @Post()
  create(@Body() createProductphoneDto: CreateProductphoneDto) {
    return this.productphoneService.create(createProductphoneDto);
  }

  @Get()
  findAll() {
    return this.productphoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productphoneService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductphoneDto: UpdateProductphoneDto,
  ) {
    return this.productphoneService.update(+id, updateProductphoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productphoneService.remove(+id);
  }
}
