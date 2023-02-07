import { PartialType } from '@nestjs/swagger';
import { CreateProducttestDto } from './create-producttest.dto';

export class UpdateProducttestDto extends PartialType(CreateProducttestDto) {}
