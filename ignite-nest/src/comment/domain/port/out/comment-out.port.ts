export interface CommentOutPort {
  createComment(comment: Comment): Promise<Comment>;
}
