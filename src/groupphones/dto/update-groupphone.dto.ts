import { PartialType } from '@nestjs/swagger';
import { CreateGroupphoneDto } from './create-groupphone.dto';

export class UpdateGroupphoneDto extends PartialType(CreateGroupphoneDto) {}
