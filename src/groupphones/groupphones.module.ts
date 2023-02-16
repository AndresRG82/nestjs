import { Module } from '@nestjs/common';
import { GroupphonesService } from './groupphones.service';
import { GroupphonesController } from './groupphones.controller';
import { GroupPhones } from './entities/groupphone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GroupPhones])],
  exports: [GroupphonesService],
  controllers: [GroupphonesController],
  providers: [GroupphonesService],
})
export class GroupphonesModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
