import { Module } from '@nestjs/common';
import { DevicediscountService } from './devicediscount.service';
import { DevicediscountController } from './devicediscount.controller';
import { DeviceDiscount } from './entities/devicediscount.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceDiscount])],
  exports: [DevicediscountService],
  controllers: [DevicediscountController],
  providers: [DevicediscountService],
})
export class DevicediscountModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
