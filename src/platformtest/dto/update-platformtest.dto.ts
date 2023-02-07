import { PartialType } from '@nestjs/swagger';
import { CreatePlatformtestDto } from './create-platformtest.dto';

export class UpdatePlatformtestDto extends PartialType(CreatePlatformtestDto) {}
