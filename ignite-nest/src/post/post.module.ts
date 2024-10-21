import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostCommandAdapter } from './infrastructure/repository/post-command.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostCommandAdapter],
})
export class PostModule {}
