import { Controller, Get, Inject, Param } from '@nestjs/common';
import {
  POST_CONTROLLER,
  POST_CONTROLLER_GROUP,
  POST_DETAIL_USECASE,
} from '../../constants/post.token';
import { ApiTags } from '@nestjs/swagger';
import { PostDetailUsecase } from '../../domain/usecase/post-detail.usecase';
import { GetPostDetailSwagger } from './decorator/post-detail-controller.decorator';
import { PostDetailDto } from './dto/response/post-detail.dto';

@ApiTags(POST_CONTROLLER_GROUP)
@Controller(POST_CONTROLLER)
export class PostDetailController {
  constructor(
    @Inject(POST_DETAIL_USECASE)
    private readonly postDetailUsecase: PostDetailUsecase,
  ) {}

  @Get(':postId')
  @GetPostDetailSwagger()
  async getPostDetail(@Param('postId') postId: number): Promise<PostDetailDto> {
    return this.postDetailUsecase.execute(postId);
  }
}
