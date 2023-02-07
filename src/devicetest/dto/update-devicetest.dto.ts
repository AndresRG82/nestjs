import { PartialType } from '@nestjs/swagger';
import { CreateDevicetestDto } from './create-devicetest.dto';

export class UpdateDevicetestDto extends PartialType(CreateDevicetestDto) {}
