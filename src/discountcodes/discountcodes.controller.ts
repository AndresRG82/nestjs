import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiscountcodesService } from './discountcodes.service';
import { CreateDiscountcodeDto } from './dto/create-discountcode.dto';
import { UpdateDiscountcodeDto } from './dto/update-discountcode.dto';

@Controller('discountcodes')
export class DiscountcodesController {
  constructor(private readonly discountcodesService: DiscountcodesService) {}

  @Post()
  create(@Body() createDiscountcodeDto: CreateDiscountcodeDto) {
    return this.discountcodesService.create(createDiscountcodeDto);
  }

  @Get()
  findAll() {
    return this.discountcodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountcodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscountcodeDto: UpdateDiscountcodeDto,
  ) {
    return this.discountcodesService.update(+id, updateDiscountcodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountcodesService.remove(+id);
  }
}
