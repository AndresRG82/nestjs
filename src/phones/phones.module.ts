import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { Phones } from './entities/phone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Phones])],
  exports: [PhonesService],
  controllers: [PhonesController],
  providers: [PhonesService],
})
export class PhonesModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* parameters */
  PAGINATION = 100;
}
