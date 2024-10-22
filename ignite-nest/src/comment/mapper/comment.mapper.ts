import { CommentUploadDto } from '../infrastructure/web/dto/request/comment-upload.dto';
import { Comment } from '../entity/comment.entity';
import { Post } from '../../post/entity/post.entity';

export class CommentMapper {
  static toEntity(post: Post, comment: CommentUploadDto): Comment {
    return new Comment(post, comment.content, comment.content);
  }
}
