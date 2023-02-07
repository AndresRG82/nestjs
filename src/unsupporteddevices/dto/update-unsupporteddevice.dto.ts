import { PartialType } from '@nestjs/swagger';
import { CreateUnsupporteddeviceDto } from './create-unsupporteddevice.dto';

export class UpdateUnsupporteddeviceDto extends PartialType(
  CreateUnsupporteddeviceDto,
) {}
