import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsIBAN,
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
import { Code_group } from '../entities/code_group.entity';
export class CreateCodeDto {
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
  @IsOptional()
  readonly group: Code_group;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly date: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(1)
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
  @MaxLength(1)
  readonly type: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @ApiProperty()
  @IsNumber()
  @IsIn([0, 1])
  readonly status: number;

  @ApiProperty()
  @IsNumber()
  times_used: number;
}
export class UpdateCodeDto extends PartialType(CreateCodeDto) {}
