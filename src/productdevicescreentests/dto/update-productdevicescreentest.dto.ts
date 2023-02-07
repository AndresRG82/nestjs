import { PartialType } from '@nestjs/swagger';
import { CreateProductdevicescreentestDto } from './create-productdevicescreentest.dto';

export class UpdateProductdevicescreentestDto extends PartialType(
  CreateProductdevicescreentestDto,
) {}
