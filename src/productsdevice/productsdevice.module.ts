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
export class ProductsdeviceModule {}
