import { Controller, Get } from '@nestjs/common';
import { POST_CONTROLLER } from '../../constants/post.token';
import { ApiTags } from '@nestjs/swagger';
import { PostDetailUsecase } from '../../domain/usecase/post-detail.usecase';
import { GetPostDetailSwagger } from './decorator/post-detail-controller.decorator';
import { PostDetailDto } from './dto/response/post-detail.dto';

@ApiTags(POST_CONTROLLER)
@Controller(POST_CONTROLLER)
export class PostDetailController {
  constructor(private readonly postDetailUsecase: PostDetailUsecase) {}

  @Get(':postId')
  @GetPostDetailSwagger()
  async getPostDetail(postId: number): Promise<PostDetailDto> {
    return this.postDetailUsecase.execute(postId);
  }
}
