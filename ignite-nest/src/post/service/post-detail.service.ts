import { Inject, Injectable } from '@nestjs/common';
import { POST_IN_PORT } from '../constants/post.token';
import { PostInPort } from '../domain/port/in/post-in.port';
import { PostDetailUsecase } from '../domain/usecase/post-detail.usecase';

@Injectable()
export class PostDetailService implements PostDetailUsecase {
  constructor(
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
  ) {}

  async execute(postId: number) {
    return this.postInPort.getPostByIdOrThrow(postId);
  }
}
