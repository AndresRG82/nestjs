import { PartialType } from '@nestjs/swagger';
import { CreateDevicediscountDto } from './create-devicediscount.dto';

export class UpdateDevicediscountDto extends PartialType(
  CreateDevicediscountDto,
) {}
