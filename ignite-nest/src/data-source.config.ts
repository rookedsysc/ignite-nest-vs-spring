import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const datasourceConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '192.168.1.12',
  port: 3306,
  username: 'root',
  password: 'df159357',
  database: 'nest_ignite',
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  synchronize: true,
  autoLoadEntities: true,
  bigNumberStrings: false, // https://stackoverflow.com/questions/59927625/how-to-store-big-int-in-nest-js-using-typeorm
  logging: true, // TODO: prod 일 때는 false로 바꾸기
};
