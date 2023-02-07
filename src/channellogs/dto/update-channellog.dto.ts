import { PartialType } from '@nestjs/swagger';
import { CreateChannellogDto } from './create-channellog.dto';

export class UpdateChannellogDto extends PartialType(CreateChannellogDto) {}
