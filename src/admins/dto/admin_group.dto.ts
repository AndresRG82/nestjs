//import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  //@ApiProperty()
  readonly group_name: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly permissions_id: number[];

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly Admins: string[];

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly created_at: string;

  @IsOptional()
  @IsString()
  //@ApiProperty()
  readonly updated_at: string;
}
export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
