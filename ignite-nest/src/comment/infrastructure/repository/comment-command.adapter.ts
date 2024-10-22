import { CommentOutPort } from '../../domain/port/out/comment-out.port';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentCommandAdapter implements CommentOutPort {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  createComment(comment: Comment): Promise<Comment> {
    return this.commentRepository.save(comment);
  }
}
