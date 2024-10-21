import { Controller, Delete, Inject, Param } from '@nestjs/common';
import {
  POST_CONTROLLER,
  POST_DELETE_USECASE,
} from '../../constants/post.token';
import { ApiTags } from '@nestjs/swagger';
import { PostDeleteUsecase } from '../../domain/usecase/post-delete.usecase';
import { DeletePostSwagger } from './decorator/post-delete-controller.decorator';

@ApiTags(POST_CONTROLLER)
@Controller(POST_CONTROLLER)
export class PostDeleteController {
  constructor(
    @Inject(POST_DELETE_USECASE)
    private readonly postDeleteUsecase: PostDeleteUsecase,
  ) {}

  @Delete(':postId')
  @DeletePostSwagger()
  async deletePost(@Param('postId') postId: number): Promise<void> {
    return this.postDeleteUsecase.execute(postId);
  }
}
