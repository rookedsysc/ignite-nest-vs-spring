import { PostUpdateDto } from '../../infrastructure/web/dto/request/post-update.dto';

export interface PostUpdateUsecase {
  execute(postId: number, postUpdateDto: PostUpdateDto): Promise<void>;
}
