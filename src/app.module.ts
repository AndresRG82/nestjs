import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModuleModule } from './db_module/database.module';
import { SessionModule } from './session/session.module';
import { UsersModule } from './users/users.module';
import { enviroments } from './enviroments';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { CodesModule } from './codes/codes.module';
import configs from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [configs],
      isGlobal: true,
      validationSchema: Joi.object({
        PG_USER: Joi.string().required(),
        PG_PASSWORD: Joi.string().required(),
        PG_HOST: Joi.required(),
        PG_DBNAME: Joi.string().required(),
        PG_PORT: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    DbModuleModule,
    UsersModule,
    SessionModule,
    AdminsModule,
    AuthModule,
    CompanyModule,
    CodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
