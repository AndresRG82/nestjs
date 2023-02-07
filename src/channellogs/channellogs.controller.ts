import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChannellogsService } from './channellogs.service';
import { CreateChannellogDto } from './dto/create-channellog.dto';
import { UpdateChannellogDto } from './dto/update-channellog.dto';

@Controller('channellogs')
export class ChannellogsController {
  constructor(private readonly channellogsService: ChannellogsService) {}

  @Post()
  create(@Body() createChannellogDto: CreateChannellogDto) {
    return this.channellogsService.create(createChannellogDto);
  }

  @Get()
  findAll() {
    return this.channellogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channellogsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChannellogDto: UpdateChannellogDto,
  ) {
    return this.channellogsService.update(+id, updateChannellogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channellogsService.remove(+id);
  }
}
