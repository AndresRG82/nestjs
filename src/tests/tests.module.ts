import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { Tests } from './entities/test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tests])],
  exports: [TestsService],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
