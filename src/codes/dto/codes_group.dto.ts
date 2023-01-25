import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { Companies } from 'src/company/entities/companies.entity';
export class CreateCodeGroupDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  readonly assistance_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  readonly code: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  readonly company_id: Companies;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsDateString()
  readonly date: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([1, 2])
  @IsPositive()
  readonly expires: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly times: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @IsIn([1, 2])
  readonly type: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @ApiProperty()
  @IsIn([0, 1])
  readonly status: number;
}
export class UpdateCodeGroupDto extends PartialType(CreateCodeGroupDto) {}
