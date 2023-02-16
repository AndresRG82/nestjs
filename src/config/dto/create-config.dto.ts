import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsBoolean,
  IsJSON,
} from 'class-validator';

export class CreateConfigDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  status: number;

  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  type: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  tosUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  tosVersion: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  callback: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  chatUrl: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  deferred: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  channelUrl: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  channelClientId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  channelClientSecret: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  groupTestTime: number;

  @ApiProperty()
  @IsOptional()
  @IsJSON()
  customMsj: object;

  @ApiProperty()
  @IsString()
  @IsOptional()
  deleteMsj: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  decPoint: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  thousandsSep: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  screenWarningMsg: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  showScreenWarning: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  screenTestEndpoint: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  advancedScreenTest: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  hideOptionalTests: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  onlyTest: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  redirectTextButton: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  redirectUrl: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  showVideoTutorial: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  tutorialUrl: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  showEmailText: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  screenEmailText: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  screenEmail: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  screenTry: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  screenShotImei: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  appleLogin: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  certificateView: boolean;
}
