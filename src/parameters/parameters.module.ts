import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { Parameters } from './entities/parameter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parameters])],
  exports: [ParametersService],
  controllers: [ParametersController],
  providers: [ParametersService],
})
export class ParametersModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* Parameters */
  TOUCH_COLUMNS = 1;
  TOUCH_ROWS = 2;
  TOUCH_TIME = 3;
  TOUCH_PERCENTAGE = 4;
  CAMERA_TIME = 5;
  SCREEN_TIME = 6;
  SCREEN_PERCENTAGE = 7;
}
