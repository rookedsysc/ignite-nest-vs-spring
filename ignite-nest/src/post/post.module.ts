import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
})
export class PostModule {}
