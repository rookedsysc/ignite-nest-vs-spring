import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceConfig } from './data-source.config';
import { CommonModule } from './common/common.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceConfig), CommonModule, PostModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
