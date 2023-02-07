import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProducttestsService } from './producttests.service';
import { CreateProducttestDto } from './dto/create-producttest.dto';
import { UpdateProducttestDto } from './dto/update-producttest.dto';

@Controller('producttests')
export class ProducttestsController {
  constructor(private readonly producttestsService: ProducttestsService) {}

  @Post()
  create(@Body() createProducttestDto: CreateProducttestDto) {
    return this.producttestsService.create(createProducttestDto);
  }

  @Get()
  findAll() {
    return this.producttestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producttestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProducttestDto: UpdateProducttestDto,
  ) {
    return this.producttestsService.update(+id, updateProducttestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producttestsService.remove(+id);
  }
}
