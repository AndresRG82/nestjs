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
import { ConfigCompanyModule } from './config/config.module';
import { BrandsModule } from './brands/brands.module';
import { CertificatedevicetestModule } from './certificatedevicetest/certificatedevicetest.module';
import { ProductphoneModule } from './productphone/productphone.module';
import { ProductdevicescreentestsModule } from './productdevicescreentests/productdevicescreentests.module';
import { TestsModule } from './tests/tests.module';
import { ProductsdeviceModule } from './productsdevice/productsdevice.module';
import { CacheModule } from './cache/cache.module';
import { CertificatesModule } from './certificates/certificates.module';
import { ChannellogsModule } from './channellogs/channellogs.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { DevicediscountModule } from './devicediscount/devicediscount.module';
import { DevicesModule } from './devices/devices.module';
import { DevicetestModule } from './devicetest/devicetest.module';
import { DiagnosticgroupsModule } from './diagnosticgroups/diagnosticgroups.module';
import { DiscountcodesModule } from './discountcodes/discountcodes.module';
import { DiscountsModule } from './discounts/discounts.module';
import { FilesModule } from './files/files.module';
import { GroupphonesModule } from './groupphones/groupphones.module';
import { GroupsModule } from './groups/groups.module';
import { ModelsModule } from './models/models.module';
import { ParametersModule } from './parameters/parameters.module';
import { PasswordresetsModule } from './passwordresets/passwordresets.module';
import { PhonesModule } from './phones/phones.module';
import { PhonetestsModule } from './phonetests/phonetests.module';
import { PlatformsModule } from './platforms/platforms.module';
import { PlatformtestModule } from './platformtest/platformtest.module';
import { ProductsModule } from './products/products.module';
import { ProducttestsModule } from './producttests/producttests.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UnsupporteddevicesModule } from './unsupporteddevices/unsupporteddevices.module';
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
    ConfigCompanyModule,
    BrandsModule,
    CertificatedevicetestModule,
    CacheModule,
    CertificatesModule,
    ChannellogsModule,
    CurrenciesModule,
    DevicediscountModule,
    DevicesModule,
    DevicetestModule,
    DiagnosticgroupsModule,
    DiscountcodesModule,
    DiscountsModule,
    FilesModule,
    GroupphonesModule,
    GroupsModule,
    ModelsModule,
    ParametersModule,
    PasswordresetsModule,
    PhonesModule,
    PhonetestsModule,
    PlatformsModule,
    PlatformtestModule,
    ProductsModule,
    ProducttestsModule,
    TransactionsModule,
    UnsupporteddevicesModule,
    ProductsdeviceModule,
    TestsModule,
    ProductdevicescreentestsModule,
    ProductphoneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
