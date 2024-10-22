import { CommentUploadDto } from '../../infrastructure/web/dto/request/comment-upload.dto';

export interface CommentUploadUsecase {
  execute(postId: number, comment: CommentUploadDto): Promise<void>;
}
