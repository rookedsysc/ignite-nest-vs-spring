import { Comment } from '../../../entity/comment.entity';

export interface CommentInPort {
  findAllCommentList(): Promise<Comment[]>;

  findCommentsByPostId(postId: number): Promise<Comment[]>;
}
