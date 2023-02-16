import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateDevicetestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  testUuid: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  status: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  state: number;
  @IsEmail()
  @IsOptional()
  @ApiProperty()
  operatorEmail: number;
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  scoreScreenTest: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  tolerancyScreenTest: number;
  @IsString()
  @IsOptional()
  @ApiProperty()
  urlScreenTest: string;
}
