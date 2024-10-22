import { CommentUploadUsecase } from '../domain/usecase/comment-upload.usecase';
import { CommentOutPort } from '../domain/port/out/comment-out.port';
import { Inject, Injectable } from '@nestjs/common';
import { COMMENT_OUT_PORT } from '../constants/comment.token';
import { CommentUploadDto } from '../infrastructure/web/dto/request/comment-upload.dto';
import { CommentMapper } from '../mapper/comment.mapper';
import { POST_IN_PORT } from '../../post/constants/post.token';
import { PostInPort } from '../../post/domain/port/in/post-in.port';

@Injectable()
export class CommentUploadService implements CommentUploadUsecase {
  constructor(
    @Inject(COMMENT_OUT_PORT)
    private readonly commentOutPort: CommentOutPort,
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
  ) {}

  async execute(postId: number, request: CommentUploadDto): Promise<void> {
    // Post 존재하는지 검증
    await this.postInPort.getPostByIdOrThrow(postId);
    const comment = CommentMapper.toEntity(postId, request);
    await this.commentOutPort.createComment(comment);
  }
}
