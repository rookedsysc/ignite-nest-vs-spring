import { PickType } from '@nestjs/swagger';
import { Post } from '../../../../entity/post.entity';
import { CommentPostDetailListDto } from '../../../../../comment/infrastructure/web/dto/response/comment-post-detail-list.dto';

export class PostDetailDto extends PickType(Post, [
  'id',
  'title',
  'content',
  'createdAt',
]) {
  comments: CommentPostDetailListDto[];
}
