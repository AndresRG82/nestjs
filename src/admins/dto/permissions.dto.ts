import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';
export class CreatePermissionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly permission: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly group_id: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly created_at: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly updated_at: string;
}
export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
