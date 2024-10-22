import { Inject, Injectable } from '@nestjs/common';
import { CommentListUsecase } from '../domain/usecase/comment-list.usecase';
import { CommentListDto } from '../infrastructure/web/dto/response/comment-list.dto';
import { CommentInPort } from '../domain/port/in/comment-in.port';
import { COMMENT_IN_PORT } from '../constants/comment.token';
import { POST_IN_PORT } from '../../post/constants/post.token';
import { PostInPort } from '../../post/domain/port/in/post-in.port';
import { Comment } from '../entity/comment.entity';
import { PostMapper } from '../../post/mapper/post.mapper';
import { CommentMapper } from '../mapper/comment.mapper';

@Injectable()
export class CommentListService implements CommentListUsecase {
  constructor(
    @Inject(COMMENT_IN_PORT)
    private readonly commentInPort: CommentInPort,
    @Inject(POST_IN_PORT)
    private readonly postInPort: PostInPort,
  ) {}

  async execute(): Promise<CommentListDto[]> {
    const comments: Comment[] = await this.commentInPort.findAllCommentList();

    const responses = await Promise.all(
      comments.map(async (comment) => {
        // Post 조회해서 PostListDto로 변환
        const post = await this.postInPort.getPostByIdOrThrow(comment.postId);
        const postListDto = PostMapper.toListResponse(post);

        // CommentListDto로 변환
        return CommentMapper.toResponse(comment, postListDto);
      }),
    );

    return responses;
  }
}