import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { COMMENT_OUT_PORT } from './constants/comment.token';
import { CommentCommandAdapter } from './infrastructure/repository/comment-command.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [
    {
      provide: COMMENT_OUT_PORT,
      useClass: CommentCommandAdapter,
    },
  ],
})
export class CommentModule {}
