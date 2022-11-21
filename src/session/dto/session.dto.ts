import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateSessionDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly user_id: string;

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
  readonly payload: any;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly last_activity: string;
}

export class UpdateSessionDto extends PartialType(CreateSessionDto) {}
