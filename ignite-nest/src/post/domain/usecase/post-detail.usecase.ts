import { PostDetailDto } from '../../infrastructure/web/dto/response/post-detail.dto';

export interface PostDetailUsecase {
  execute(postId: number): Promise<PostDetailDto>;
}
