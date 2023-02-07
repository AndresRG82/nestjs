import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PasswordresetsService } from './passwordresets.service';
import { CreatePasswordresetDto } from './dto/create-passwordreset.dto';
import { UpdatePasswordresetDto } from './dto/update-passwordreset.dto';

@Controller('passwordresets')
export class PasswordresetsController {
  constructor(private readonly passwordresetsService: PasswordresetsService) {}

  @Post()
  create(@Body() createPasswordresetDto: CreatePasswordresetDto) {
    return this.passwordresetsService.create(createPasswordresetDto);
  }

  @Get()
  findAll() {
    return this.passwordresetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passwordresetsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePasswordresetDto: UpdatePasswordresetDto,
  ) {
    return this.passwordresetsService.update(+id, updatePasswordresetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passwordresetsService.remove(+id);
  }
}
