import { PickType } from '@nestjs/swagger';
import { Comment } from '../../../../entity/comment.entity';

export class CommentPostDetailListDto extends PickType(Comment, [
  'id',
  'title',
  'content',
  'createdAt',
]) {}
