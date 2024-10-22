import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  POST_CONTROLLER,
  POST_CONTROLLER_GROUP,
  POST_LIST_USECASE,
} from '../../constants/post.token';
import { PostListUsecase } from '../../domain/usecase/post-list.usecase';
import { PageRequestDto } from '../../../common/dto/page-request.dto';
import { PageResponseDto } from '../../../common/dto/page-response.dto';
import { PostListDto } from './dto/response/post-list.dto';
import { PageResponseDecorator } from '../../../common/decorator/page-response.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(POST_CONTROLLER_GROUP)
@Controller(POST_CONTROLLER)
export class PostListController {
  constructor(
    @Inject(POST_LIST_USECASE)
    private readonly postListUsecase: PostListUsecase,
  ) {}

  @Get()
  @PageResponseDecorator(PostListDto)
  async get(
    @Query() request: PageRequestDto,
  ): Promise<PageResponseDto<PostListDto>> {
    return await this.postListUsecase.execute(request);
  }
}
