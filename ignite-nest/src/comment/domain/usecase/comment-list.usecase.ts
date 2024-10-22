import { CommentListDto } from '../../infrastructure/web/dto/response/comment-list.dto';

export interface CommentListUsecase {
  execute(): Promise<CommentListDto[]>;
}