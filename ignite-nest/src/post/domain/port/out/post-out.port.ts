import { PostUploadDto } from '../../../infrastructure/web/dto/request/post-upload.dto';
import { Post } from '../../../entity/post.entity';
import { PostUpdateDto } from '../../../infrastructure/web/dto/request/post-update.dto';

export interface PostOutPort {
  save(postUploadDto: PostUploadDto): Promise<Post>;

  update(post: Post, postUpdateDto: PostUpdateDto): Promise<Post>;
}
