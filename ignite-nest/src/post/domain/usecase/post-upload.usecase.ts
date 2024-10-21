import { PostUploadDto } from '../../infrastructure/web/dto/request/post-upload.dto';

export interface PostUploadUsecase {
  uploadPost(postUpload: PostUploadDto): Promise<void>;
}
