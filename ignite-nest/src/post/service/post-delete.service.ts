import { PostDeleteUsecase } from '../domain/usecase/post-delete.usecase';
import { Inject, Injectable } from '@nestjs/common';
import { POST_IN_PORT, POST_OUT_PORT } from '../constants/post.token';
import { PostInPort } from '../domain/port/in/post-in.port';
import { PostOutPort } from '../domain/port/out/post-out.port';
import { COMMENT_OUT_PORT } from '../../comment/constants/comment.token';
import { CommentOutPort } from '../../comment/domain/port/out/comment-out.port';

@Injectable()
export class PostDeleteService implements PostDeleteUsecase {
  constructor(
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
    @Inject(POST_OUT_PORT)
    private readonly postOutPort: PostOutPort,
    @Inject(COMMENT_OUT_PORT)
    private readonly commentOutPort: CommentOutPort,
  ) {}

  async execute(postId: number): Promise<void> {
    await this.commentOutPort.deleteByPostId(postId);
    const post = await this.postInPort.getPostByIdOrThrow(postId);
    await this.postOutPort.delete(post);
  }
}
