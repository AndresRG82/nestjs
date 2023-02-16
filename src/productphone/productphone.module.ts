import { Module } from '@nestjs/common';
import { ProductphoneService } from './productphone.service';
import { ProductphoneController } from './productphone.controller';
import { ProductPhone } from './entities/productphone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPhone])],
  exports: [ProductphoneService],
  controllers: [ProductphoneController],
  providers: [ProductphoneService],
})
export class ProductphoneModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
