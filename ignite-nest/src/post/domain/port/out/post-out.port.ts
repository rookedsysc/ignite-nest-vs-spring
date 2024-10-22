import { PostUploadDto } from '../../../infrastructure/web/dto/request/post-upload.dto';
import { Post } from '../../../entity/post.entity';
import { PostUpdateDto } from '../../../infrastructure/web/dto/request/post-update.dto';

export interface PostOutPort {
  save(postUploadDto: PostUploadDto): Promise<Post>;

  update(post: Post, postUpdateDto: PostUpdateDto): Promise<Post>;

  delete(post: Post): Promise<void>;

  /**
   * 댓글 수 차감시 -1, 증가시 +1
   * @param post
   * @param value
   */
  updateCommentCount(post: Post, value: number): Promise<Post>;
}
