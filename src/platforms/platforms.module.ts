import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsController } from './platforms.controller';
import { Platforms } from './entities/platform.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Platforms])],
  exports: [PlatformsService],
  controllers: [PlatformsController],
  providers: [PlatformsService],
})
export class PlatformsModule {}
