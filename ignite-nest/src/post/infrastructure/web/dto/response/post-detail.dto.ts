import { PickType } from '@nestjs/swagger';
import { Post } from '../../../../entity/post.entity';
import { CommentListDto } from '../../../../../comment/infrastructure/web/dto/response/comment-list.dto';

export class PostDetailDto extends PickType(Post, [
  'id',
  'title',
  'content',
  'createdAt',
]) {
  comments: CommentListDto[];
}
