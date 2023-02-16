import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsBoolean,
} from 'class-validator';
export class CreateTestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  status: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  free: number;
}
