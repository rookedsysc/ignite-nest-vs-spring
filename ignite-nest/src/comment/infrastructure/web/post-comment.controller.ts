import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import {
  COMMENT_CONTROLLER_GROUP,
  COMMENT_UPLOAD_USECASE,
} from '../../constants/comment.token';
import { ApiTags } from '@nestjs/swagger';
import { CommentUploadUsecase } from '../../domain/usecase/comment-upload.usecase';
import { POST_CONTROLLER } from '../../../post/constants/post.token';
import { CommentUploadDto } from './dto/request/comment-upload.dto';

/**
 * Post 리소스에 있는 Comment 리소스를 컨트롤 하는 클래스
 */
@ApiTags(COMMENT_CONTROLLER_GROUP)
@Controller(POST_CONTROLLER)
export class PostCommentController {
  constructor(
    @Inject(COMMENT_UPLOAD_USECASE)
    private readonly commentUploadUsecase: CommentUploadUsecase,
  ) {}

  @Post('/:postId/comments')
  async uploadComment(
    @Param('postId') postId: number,
    @Body() commentUploadDto: CommentUploadDto,
  ) {
    await this.commentUploadUsecase.execute(postId, commentUploadDto);
  }
}
