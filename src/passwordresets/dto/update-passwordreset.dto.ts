import { PartialType } from '@nestjs/swagger';
import { CreatePasswordresetDto } from './create-passwordreset.dto';

export class UpdatePasswordresetDto extends PartialType(
  CreatePasswordresetDto,
) {}
