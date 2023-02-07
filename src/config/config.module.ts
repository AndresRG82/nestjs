import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { Configs } from './entities/config.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Configs])],
  exports: [ConfigService],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigCompanyModule {}
