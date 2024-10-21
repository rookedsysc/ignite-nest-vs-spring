import { PageRequestDto } from '../../../common/dto/page-request.dto';
import { PageResponseDto } from '../../../common/dto/page-response.dto';
import { PostListDto } from '../../infrastructure/web/dto/response/post-list.dto';

export interface PostListUsecase {
  execute(pageRequest: PageRequestDto): Promise<PageResponseDto<PostListDto>>;
}
