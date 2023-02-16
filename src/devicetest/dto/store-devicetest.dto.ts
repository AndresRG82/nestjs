import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class StoreDevicetestDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  testUuid: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  model: string;
  @IsEmail()
  @IsOptional()
  @ApiProperty()
  operatorEmail: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  scoreScreenTest: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  tolerancyScreenTest: number;
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  urlScreenTest: number;
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  state: number;
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  trust_id: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  imei_1: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  imei_2: string;
  @IsUrl()
  @IsOptional()
  @ApiProperty()
  imei_img_url: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  action: number;
}
