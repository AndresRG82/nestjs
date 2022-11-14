import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsHexColor,
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
export class CreateCompanyDto {
  @IsOptional()
  @IsInt()
  @ApiProperty()
  readonly status: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  readonly logo: string;

  @IsNotEmpty()
  @IsHexColor()
  @ApiProperty()
  readonly primary: string;

  @IsNotEmpty()
  @IsHexColor()
  @ApiProperty()
  readonly secondary: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly company_uid: number;

  @IsOptional()
  @IsISO8601()
  @ApiProperty()
  readonly created_at: string;

  @IsOptional()
  @IsISO8601()
  @ApiProperty()
  readonly updated_at: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly title_drop: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly phone_number: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty()
  readonly email_contact: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly whatsapp_contact: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  readonly second_logo: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  readonly web_url: string;
}
export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
