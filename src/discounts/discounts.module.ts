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
export class DiscountsModule {
  /* type */
  PERCENTAGE = 1;
  PRICE = 2;

  /* expiration */
  DATE = 1;
  STOCK = 2;

  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* responses */
  SUCCESS = 'Código ingresado con éxito.';
  ERROR = 'Ups! este código no esta disponible.';

  /* codes */
  MAX_LENGTH_PREFIX = 32;
  RANDOM = 4;
  MAX_LENGTH = 36;
  MAX_RETRIES = 10;
}
