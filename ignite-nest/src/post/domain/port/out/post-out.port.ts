import { PostUploadDto } from '../../../infrastructure/web/dto/request/post-upload.dto';
import { Post } from '../../../entity/post.entity';

export interface PostOutPort {
  save(postUploadDto: PostUploadDto): Promise<Post>;
}
