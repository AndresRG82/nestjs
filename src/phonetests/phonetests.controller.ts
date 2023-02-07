import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhonetestsService } from './phonetests.service';
import { CreatePhonetestDto } from './dto/create-phonetest.dto';
import { UpdatePhonetestDto } from './dto/update-phonetest.dto';

@Controller('phonetests')
export class PhonetestsController {
  constructor(private readonly phonetestsService: PhonetestsService) {}

  @Post()
  create(@Body() createPhonetestDto: CreatePhonetestDto) {
    return this.phonetestsService.create(createPhonetestDto);
  }

  @Get()
  findAll() {
    return this.phonetestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonetestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhonetestDto: UpdatePhonetestDto,
  ) {
    return this.phonetestsService.update(+id, updatePhonetestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonetestsService.remove(+id);
  }
}
