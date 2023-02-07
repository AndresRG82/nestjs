import { Module } from '@nestjs/common';
import { ChannellogsService } from './channellogs.service';
import { ChannellogsController } from './channellogs.controller';
import { ChannelLogs } from './entities/channellog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelLogs])],
  exports: [ChannellogsService],
  controllers: [ChannellogsController],
  providers: [ChannellogsService],
})
export class ChannellogsModule {}
