import { CommentUploadDto } from '../infrastructure/web/dto/request/comment-upload.dto';
import { Comment } from '../entity/comment.entity';
import { Post } from '../../post/entity/post.entity';
import { PostListDto } from '../../post/infrastructure/web/dto/response/post-list.dto';
import { CommentListDto } from '../infrastructure/web/dto/response/comment-list.dto';

export class CommentMapper {
  static toEntity(post: Post, comment: CommentUploadDto): Comment {
    return new Comment(post, comment.content, comment.content);
  }

  static toResponse(
    comment: Comment,
    postListDto: PostListDto,
  ): CommentListDto {
    const commentListDto = {
      id: comment.id,
      title: comment.title,
      content: comment.content,
      createdAt: comment.createdAt,
      postListDto,
    };
    return commentListDto;
  }
}
