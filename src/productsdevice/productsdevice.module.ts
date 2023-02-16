import { Module } from '@nestjs/common';
import { ProductsdeviceService } from './productsdevice.service';
import { ProductsdeviceController } from './productsdevice.controller';
import { ProductsDevice } from './entities/productsdevice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsDevice])],
  exports: [ProductsdeviceService],
  controllers: [ProductsdeviceController],
  providers: [ProductsdeviceService],
})
export class ProductsdeviceModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* assistances states */
  ACTIVATED = 1;
  DISASTER = 2;
  REJECTED = 3;
  EXPIRED = 4;
  PAID = 5;
  NOT_BOUGHT = 6;
  BUYING = 7;
  PAYING = 8;
  CANCELED = 9;
  PREPAID = 10;
}
