import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { Sessions } from './entities/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sessions])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
