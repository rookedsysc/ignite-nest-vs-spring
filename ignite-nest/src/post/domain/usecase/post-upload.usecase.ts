import { PostUploadDto } from '../../infrastructure/web/dto/request/post-upload.dto';

export interface PostUploadUsecase {
  execute(postUpload: PostUploadDto): Promise<void>;
}
