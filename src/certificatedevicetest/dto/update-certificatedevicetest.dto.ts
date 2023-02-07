import { PartialType } from '@nestjs/swagger';
import { CreateCertificatedevicetestDto } from './create-certificatedevicetest.dto';

export class UpdateCertificatedevicetestDto extends PartialType(
  CreateCertificatedevicetestDto,
) {}
