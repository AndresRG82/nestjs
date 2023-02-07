import { PartialType } from '@nestjs/swagger';
import { CreatePhonetestDto } from './create-phonetest.dto';

export class UpdatePhonetestDto extends PartialType(CreatePhonetestDto) {}
