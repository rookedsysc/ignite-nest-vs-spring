import { PostUpdateUsecase } from '../domain/usecase/post-update.usecase';
import { Inject, Injectable } from '@nestjs/common';
import { POST_IN_PORT, POST_OUT_PORT } from '../constants/post.token';
import { PostOutPort } from '../domain/port/out/post-out.port';
import { PostUpdateDto } from '../infrastructure/web/dto/request/post-update.dto';
import { PostInPort } from '../domain/port/in/post-in.port';

@Injectable()
export class PostUpdateService implements PostUpdateUsecase {
  constructor(
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
    @Inject(POST_OUT_PORT)
    private readonly postOutPort: PostOutPort,
  ) {}

  async execute(postId: number, postUpdateDto: PostUpdateDto): Promise<void> {
    const post = await this.postInPort.getPostByIdOrThrow(postId);
    await this.postOutPort.update(post, postUpdateDto);
  }
}
