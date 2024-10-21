export interface PostDeleteUsecase {
  execute(postId: number): Promise<void>;
}
