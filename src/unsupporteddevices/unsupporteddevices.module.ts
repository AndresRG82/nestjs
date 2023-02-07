import { Module } from '@nestjs/common';
import { UnsupporteddevicesService } from './unsupporteddevices.service';
import { UnsupporteddevicesController } from './unsupporteddevices.controller';
import { UnsupportedDevices } from './entities/unsupporteddevice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UnsupportedDevices])],
  exports: [UnsupporteddevicesService],
  controllers: [UnsupporteddevicesController],
  providers: [UnsupporteddevicesService],
})
export class UnsupporteddevicesModule {}
