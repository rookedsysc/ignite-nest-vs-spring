import { Comment } from '../../../entity/comment.entity';

export interface CommentOutPort {
  createComment(comment: Comment): Promise<Comment>;
}
