import { CommentListDto } from '../../infrastructure/web/dto/response/comment-list.dto';
import { PageRequestDto } from '../../../common/dto/page-request.dto';

export interface CommentListUsecase {
  execute(request: PageRequestDto): Promise<CommentListDto[]>;
}
