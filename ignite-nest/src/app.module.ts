import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceConfig } from './data-source.config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceConfig), CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
