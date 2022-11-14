import { PartialType } from '@nestjs/mapped-types';
//import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  //@ApiProperty()
  readonly name: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly lastname: string;

  @IsEmail()
  @IsNotEmpty()
  //@ApiProperty()
  readonly email: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly email_verified_at: string;

  @IsNotEmpty()
  @IsString()
  //@ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  //@ApiProperty()
  readonly rut: string;

  @IsOptional()
  @IsUrl()
  //@ApiProperty()
  readonly avatar: string;

  //readonly status: number;

  @IsNotEmpty()
  @IsString()
  //@ApiProperty()
  readonly confirmation_token: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly remember_token: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly facebook_id: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly google_id: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly apple_id: string;

  @IsOptional()
  @IsDateString()
  //@ApiProperty()
  readonly created_at: string;

  @IsOptional()
  @IsDateString()
  //@ApiProperty()
  readonly updated_at: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
