import { PickType } from '@nestjs/swagger';
import { Comment } from '../../../../entity/comment.entity';
import { PostListDto } from '../../../../../post/infrastructure/web/dto/response/post-list.dto';

export class CommentListDto extends PickType(Comment, [
  'id',
  'title',
  'content',
  'createdAt',
]) {
  post: PostListDto;

  constructor(
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    postListDto: PostListDto,
  ) {
    super(id, title, content, createdAt);
    this.post = postListDto;
  }
}
