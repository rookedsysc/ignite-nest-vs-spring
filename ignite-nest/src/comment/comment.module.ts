import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  COMMENT_IN_PORT,
  COMMENT_LIST_USECASE,
  COMMENT_OUT_PORT,
  COMMENT_UPLOAD_USECASE,
} from './constants/comment.token';
import { CommentCommandAdapter } from './infrastructure/repository/comment-command.adapter';
import { CommentUploadService } from './service/comment-upload.service';
import { PostModule } from '../post/post.module';
import { PostCommentController } from './infrastructure/web/post-comment.controller';
import { Comment } from './entity/comment.entity';
import { CommentQueryAdapter } from './infrastructure/repository/comment-query.adapter';
import { CommentListService } from './service/comment-list.service';
import { CommentController } from './infrastructure/web/comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), PostModule],
  providers: [
    {
      provide: COMMENT_OUT_PORT,
      useClass: CommentCommandAdapter,
    },
    {
      provide: COMMENT_IN_PORT,
      useClass: CommentQueryAdapter,
    },
    {
      provide: COMMENT_UPLOAD_USECASE,
      useClass: CommentUploadService,
    },
    {
      provide: COMMENT_LIST_USECASE,
      useClass: CommentListService,
    },
  ],
  controllers: [PostCommentController, CommentController],
})
export class CommentModule {}
