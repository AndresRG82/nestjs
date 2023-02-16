import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  exports: [ProductsService],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* paid */
  NEGATIVE_PAID = 'NO';
  AFFIRMATIVE_PAID = 'SI';

  /* actions */
  TOUCH = 1;
  BUTTONS = 2;
  CAMERA = 3;
  SCREEN = 4;
}
