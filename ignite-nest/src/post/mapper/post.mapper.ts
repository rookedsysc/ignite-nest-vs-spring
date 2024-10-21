import { PostUploadDto } from '../infrastructure/web/dto/request/post-upload.dto';
import { Post } from '../entity/post.entity';
import { PostDetailDto } from '../infrastructure/web/dto/response/post-detail.dto';
import { PageResponseDto } from '../../common/dto/page-response.dto';
import { PostListDto } from '../infrastructure/web/dto/response/post-list.dto';

export class PostMapper {
  static toEntity(postUploadDto: PostUploadDto): Post {
    const post = new Post();
    post.title = postUploadDto.title;
    post.content = postUploadDto.content;
    return post;
  }

  static toResponse(post: Post): PostDetailDto {
    const postDetailDto = new PostDetailDto();
    postDetailDto.id = post.id;
    postDetailDto.title = post.title;
    postDetailDto.content = post.content;
    postDetailDto.createdAt = post.createdAt;

    return postDetailDto;
  }

  static toListResponse(
    postPageResponse: PageResponseDto<Post>,
  ): PageResponseDto<PostListDto> {
    const postListDto = new PageResponseDto<PostListDto>(
      postPageResponse.total,
      postPageResponse.currentPage,
      postPageResponse.size,
      postPageResponse.items.map((post) => {
        const postListDto = new PostListDto();
        postListDto.id = post.id;
        postListDto.title = post.title;
        postListDto.commentCount = post.commentCount;
        postListDto.createdAt = post.createdAt;
        return postListDto;
      }),
    );

    return postListDto;
  }
}
