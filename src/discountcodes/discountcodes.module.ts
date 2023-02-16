import { Module } from '@nestjs/common';
import { DiscountcodesService } from './discountcodes.service';
import { DiscountcodesController } from './discountcodes.controller';
import { DiscountCodes } from './entities/discountcode.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountCodes])],
  exports: [DiscountcodesService],
  controllers: [DiscountcodesController],
  providers: [DiscountcodesService],
})
export class DiscountcodesModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
