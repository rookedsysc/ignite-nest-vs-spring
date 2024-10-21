import { PostDeleteUsecase } from '../domain/usecase/post-delete.usecase';
import { Inject, Injectable } from '@nestjs/common';
import { POST_IN_PORT, POST_OUT_PORT } from '../constants/post.token';
import { PostInPort } from '../domain/port/in/post-in.port';
import { PostOutPort } from '../domain/port/out/post-out.port';

@Injectable()
export class PostDeleteService implements PostDeleteUsecase {
  constructor(
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
    @Inject(POST_OUT_PORT)
    private readonly postOutPort: PostOutPort,
  ) {}

  async execute(postId: number): Promise<void> {
    const post = await this.postInPort.getPostByIdOrThrow(postId);
    await this.postOutPort.delete(post);
  }
}
