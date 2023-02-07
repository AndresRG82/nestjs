import { PartialType } from '@nestjs/swagger';
import { CreateProductphoneDto } from './create-productphone.dto';

export class UpdateProductphoneDto extends PartialType(CreateProductphoneDto) {}
