import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const datasourceConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: '49.142.7.24',
    port: 3306,
    username: 'root',
    password: 'df159357',
    database: 'mysql',
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    synchronize: true,
    autoLoadEntities: true,
    bigNumberStrings: false, // https://stackoverflow.com/questions/59927625/how-to-store-big-int-in-nest-js-using-typeorm
    logging: true, // TODO: prod 일 때는 false로 바꾸기
  }),
  inject: [ConfigService],
};
