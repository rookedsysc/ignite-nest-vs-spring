import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  COMMENT_OUT_PORT,
  COMMENT_UPLOAD_USECASE,
} from './constants/comment.token';
import { CommentCommandAdapter } from './infrastructure/repository/comment-command.adapter';
import { CommentUploadService } from './service/comment-upload.service';
import { PostModule } from '../post/post.module';
import { PostCommentController } from './infrastructure/web/post-comment.controller';
import { Comment } from './entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), PostModule],
  providers: [
    {
      provide: COMMENT_OUT_PORT,
      useClass: CommentCommandAdapter,
    },
    {
      provide: COMMENT_UPLOAD_USECASE,
      useClass: CommentUploadService,
    },
  ],
  controllers: [PostCommentController],
})
export class CommentModule {}
