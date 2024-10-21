import { PickType } from '@nestjs/swagger';
import { Post } from '../../../../entity/post.entity';

export class PostListDto extends PickType(Post, [
  'id',
  'title',
  'commentCount',
  'createdAt',
]) {}
