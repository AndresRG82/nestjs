import { Module } from '@nestjs/common';
import { ProductdevicescreentestsService } from './productdevicescreentests.service';
import { ProductdevicescreentestsController } from './productdevicescreentests.controller';
import { ProductDeviceScreenTests } from './entities/productdevicescreentest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDeviceScreenTests])],
  exports: [ProductdevicescreentestsService],
  controllers: [ProductdevicescreentestsController],
  providers: [ProductdevicescreentestsService],
})
export class ProductdevicescreentestsModule {}
