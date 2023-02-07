import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheController } from './cache.controller';
import { Cache } from './entities/cache.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cache])],
  exports: [CacheService],
  controllers: [CacheController],
  providers: [CacheService],
})
export class CacheModule {}
