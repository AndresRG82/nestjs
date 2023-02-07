import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (ConfigService: ConfigType<typeof config>) => {
        const { user, password, host, db_name, port } = ConfigService.database;
        return {
          type: 'postgres',
          host: host,
          port: port,
          username: user,
          password: password,
          database: db_name,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DbModuleModule {}
