import { PostInPort } from '../../domain/port/in/post-in.port';
import { Injectable } from '@nestjs/common';
import { Post } from '../../entity/post.entity';
import { PageRequestDto } from '../../../common/dto/page-request.dto';
import { PageResponseDto } from '../../../common/dto/page-response.dto';
import { PaginationHelper } from '../../../common/helper/pagination-helper.service';

@Injectable()
export class PostQueryAdapter implements PostInPort {
  constructor(private readonly paginationService: PaginationHelper) {}

  async getPostList(request: PageRequestDto): Promise<PageResponseDto<Post>> {
    return this.paginationService.paginate(Post, request);
  }
}
