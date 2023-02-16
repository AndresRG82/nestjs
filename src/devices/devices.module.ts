import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { Devices } from './entities/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Devices])],
  exports: [DevicesService],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
