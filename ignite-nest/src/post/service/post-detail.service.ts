import { Inject, Injectable } from '@nestjs/common';
import { POST_IN_PORT } from '../constants/post.token';
import { PostInPort } from '../domain/port/in/post-in.port';
import { PostDetailUsecase } from '../domain/usecase/post-detail.usecase';
import { COMMENT_IN_PORT } from '../../comment/constants/comment.token';
import { CommentInPort } from '../../comment/domain/port/in/comment-in.port';
import { PostDetailDto } from '../infrastructure/web/dto/response/post-detail.dto';
import { CommentMapper } from '../../comment/mapper/comment.mapper';
import { PostMapper } from '../mapper/post.mapper';

@Injectable()
export class PostDetailService implements PostDetailUsecase {
  constructor(
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
    @Inject(COMMENT_IN_PORT)
    private readonly commentInPort: CommentInPort,
  ) {}

  async execute(postId: number): Promise<PostDetailDto> {
    const post = await this.postInPort.getPostByIdOrThrow(postId);
    const comments = (
      await this.commentInPort.findCommentsByPostId(postId)
    ).map((comment) => {
      return CommentMapper.toPostDetailResponse(comment);
    });
    const response = PostMapper.toResponse(post, comments);
    return response;
  }
}
