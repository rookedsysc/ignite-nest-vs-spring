import { PostUploadDto } from '../infrastructure/web/dto/request/post-upload.dto';
import { Post } from '../entity/post.entity';
import { PostDetailDto } from '../infrastructure/web/dto/response/post-detail.dto';

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
}
