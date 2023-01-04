import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly client_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly client_secret: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly grant_type: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly status: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly logo: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly primary: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly secondary: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly company_uid: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly title_drop: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly phone_number: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @ApiProperty()
  readonly email_contact: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly whatsapp_contact: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly second_logo: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  @ApiProperty()
  readonly web_url: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly created_at: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly updated_at: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly group_id: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
