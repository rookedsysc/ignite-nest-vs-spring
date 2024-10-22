import { PostInPort } from '../../domain/port/in/post-in.port';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../../entity/post.entity';
import { PageRequestDto } from '../../../common/dto/page-request.dto';
import { PageResponseDto } from '../../../common/dto/page-response.dto';
import { PaginationHelper } from '../../../common/helper/pagination-helper.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostQueryAdapter implements PostInPort {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly paginationService: PaginationHelper,
  ) {}

  async getPostByIdOrThrow(postId: number): Promise<Post> {
    const post = await this.postRepository
      .findOneOrFail({ where: { id: postId } })
      .catch(() => {
        throw new NotFoundException(`Post id ${postId} not found`);
      });

    return post;
  }

  async findPostList(request: PageRequestDto): Promise<PageResponseDto<Post>> {
    return this.paginationService.paginate(Post, request);
  }
}
