import { PickType } from '@nestjs/swagger';
import { Post } from '../../../../entity/post.entity';

export class PostDetailDto extends PickType(Post, [
  'id',
  'title',
  'content',
  'createdAt',
]) {}
