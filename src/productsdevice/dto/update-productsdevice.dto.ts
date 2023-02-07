import { PartialType } from '@nestjs/swagger';
import { CreateProductsdeviceDto } from './create-productsdevice.dto';

export class UpdateProductsdeviceDto extends PartialType(
  CreateProductsdeviceDto,
) {}
