import { PageResponseDto } from '../../../../common/dto/page-response.dto';
import { Post } from '../../../entity/post.entity';
import { PageRequestDto } from '../../../../common/dto/page-request.dto';

export interface PostInPort {
  findPostList(request: PageRequestDto): Promise<PageResponseDto<Post>>;

  getPostByIdOrThrow(postId: number): Promise<Post>;
}
