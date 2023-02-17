import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsBoolean,
  IsJSON,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  price: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  icon: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  titleDrop: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  free: boolean;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  group: boolean;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  currency: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  monthNumber: number;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  showMonth: boolean;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isDecimal: boolean;
}
