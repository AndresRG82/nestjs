import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodesService } from './services/codes.service';
import { CodesController } from './controllers/codes.controller';
import { Code } from './entities/code.entity';
import { Code_group } from './entities/code_group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Code, Code_group])],
  controllers: [CodesController],
  providers: [CodesService],
})
export class CodesModule {}
