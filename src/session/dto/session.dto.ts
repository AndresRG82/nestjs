import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateSessionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly id: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly user_id: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly ip_adress: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly user_agent: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly payload: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly last_activity: number;
}

export class UpdateSessionDto extends PartialType(CreateSessionDto) {}
