import { Injectable } from '@nestjs/common';
import { CreateChannellogDto } from './dto/create-channellog.dto';
import { UpdateChannellogDto } from './dto/update-channellog.dto';

@Injectable()
export class ChannellogsService {
  create(createChannellogDto: CreateChannellogDto) {
    return 'This action adds a new channellog';
  }

  findAll() {
    return `This action returns all channellogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channellog`;
  }

  update(id: number, updateChannellogDto: UpdateChannellogDto) {
    return `This action updates a #${id} channellog`;
  }

  remove(id: number) {
    return `This action removes a #${id} channellog`;
  }
}
