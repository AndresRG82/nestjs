import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
export class CreateAdminDto {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly group_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly lastname: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly status: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly remember_token: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly confirmation_token: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly created_at: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly updated_at: string;
}
export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
