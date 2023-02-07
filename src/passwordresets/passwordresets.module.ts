import { Module } from '@nestjs/common';
import { PasswordresetsService } from './passwordresets.service';
import { PasswordresetsController } from './passwordresets.controller';
import { PasswordResets } from './entities/passwordreset.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PasswordResets])],
  exports: [PasswordresetsService],
  controllers: [PasswordresetsController],
  providers: [PasswordresetsService],
})
export class PasswordresetsModule {}
