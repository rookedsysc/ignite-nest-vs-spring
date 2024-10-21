import { PostListUsecase } from '../domain/usecase/post-list.usecase';
import { Injectable } from '@nestjs/common';
import { Post } from '../entity/post.entity';
import { PaginationHelper } from '../../common/helper/pagination-helper.service';
import { PageRequestDto } from '../../common/dto/page-request.dto';
import { PostMapper } from '../mapper/post.mapper';
import { PostListDto } from '../infrastructure/web/dto/response/post-list.dto';
import { PageResponseDto } from '../../common/dto/page-response.dto';

@Injectable()
export class PostListService implements PostListUsecase {
  constructor(private readonly paginationService: PaginationHelper) {}

  async execute(
    request: PageRequestDto,
  ): Promise<PageResponseDto<PostListDto>> {
    const postPageResponse = await this.paginationService.paginate(
      Post,
      request,
    );
    const postDtoResponse = PostMapper.toListResponse(postPageResponse);
    return postDtoResponse;
  }
}
