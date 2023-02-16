import { Module } from '@nestjs/common';
import { PhonetestsService } from './phonetests.service';
import { PhonetestsController } from './phonetests.controller';
import { PhoneTests } from './entities/phonetest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PhoneTests])],
  exports: [PhonetestsService],
  controllers: [PhonetestsController],
  providers: [PhonetestsService],
})
export class PhonetestsModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
