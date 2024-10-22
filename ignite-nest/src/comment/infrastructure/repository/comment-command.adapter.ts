import { CommentOutPort } from '../../domain/port/out/comment-out.port';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../../entity/comment.entity';

@Injectable()
export class CommentCommandAdapter implements CommentOutPort {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async deleteByPostId(postId: number): Promise<void> {
    await this.commentRepository.delete({ postId });
  }

  async createComment(comment: Comment): Promise<Comment> {
    return await this.commentRepository.save(comment);
  }
}
