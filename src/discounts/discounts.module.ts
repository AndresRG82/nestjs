import { Module } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';
import { Discounts } from './entities/discount.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Discounts])],
  exports: [DiscountsService],
  controllers: [DiscountsController],
  providers: [DiscountsService],
})
export class DiscountsModule {}
