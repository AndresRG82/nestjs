import { Module } from '@nestjs/common';
import { DevicetestService } from './devicetest.service';
import { DevicetestController } from './devicetest.controller';
import { DeviceTest } from './entities/devicetest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceTest])],
  exports: [DevicetestService],
  controllers: [DevicetestController],
  providers: [DevicetestService],
})
export class DevicetestModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* states */
  APPROVED = 1;
  REJECTED = 2;
}
