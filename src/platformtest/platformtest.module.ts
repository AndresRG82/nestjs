import { Module } from '@nestjs/common';
import { PlatformtestService } from './platformtest.service';
import { PlatformtestController } from './platformtest.controller';
import { PlatformTest } from './entities/platformtest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlatformTest])],
  exports: [PlatformtestService],
  controllers: [PlatformtestController],
  providers: [PlatformtestService],
})
export class PlatformtestModule {}
