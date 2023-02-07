import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlatformtestService } from './platformtest.service';
import { CreatePlatformtestDto } from './dto/create-platformtest.dto';
import { UpdatePlatformtestDto } from './dto/update-platformtest.dto';

@Controller('platformtest')
export class PlatformtestController {
  constructor(private readonly platformtestService: PlatformtestService) {}

  @Post()
  create(@Body() createPlatformtestDto: CreatePlatformtestDto) {
    return this.platformtestService.create(createPlatformtestDto);
  }

  @Get()
  findAll() {
    return this.platformtestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platformtestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlatformtestDto: UpdatePlatformtestDto,
  ) {
    return this.platformtestService.update(+id, updatePlatformtestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platformtestService.remove(+id);
  }
}
