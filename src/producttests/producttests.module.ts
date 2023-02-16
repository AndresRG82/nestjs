import { Module } from '@nestjs/common';
import { ProducttestsService } from './producttests.service';
import { ProducttestsController } from './producttests.controller';
import { ProductTests } from './entities/producttest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTests])],
  exports: [ProducttestsService],
  controllers: [ProducttestsController],
  providers: [ProducttestsService],
})
export class ProducttestsModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
