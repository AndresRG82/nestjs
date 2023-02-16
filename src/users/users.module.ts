import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { AdminsModule } from 'src/admins/admins.module';
import config from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    AdminsModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtSecret,
          signOptions: { expiresIn: '2h' },
        };
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
  AWAITING_CONFIRMATION = 2;

  PASSPORT_CLIENT = 1;
}
