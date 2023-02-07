import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductdevicescreentestsService } from './productdevicescreentests.service';
import { CreateProductdevicescreentestDto } from './dto/create-productdevicescreentest.dto';
import { UpdateProductdevicescreentestDto } from './dto/update-productdevicescreentest.dto';

@Controller('productdevicescreentests')
export class ProductdevicescreentestsController {
  constructor(
    private readonly productdevicescreentestsService: ProductdevicescreentestsService,
  ) {}

  @Post()
  create(
    @Body() createProductdevicescreentestDto: CreateProductdevicescreentestDto,
  ) {
    return this.productdevicescreentestsService.create(
      createProductdevicescreentestDto,
    );
  }

  @Get()
  findAll() {
    return this.productdevicescreentestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productdevicescreentestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductdevicescreentestDto: UpdateProductdevicescreentestDto,
  ) {
    return this.productdevicescreentestsService.update(
      +id,
      updateProductdevicescreentestDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productdevicescreentestsService.remove(+id);
  }
}
