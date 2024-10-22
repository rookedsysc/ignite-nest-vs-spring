import { Injectable } from '@nestjs/common';
import { CommentInPort } from '../../domain/port/in/comment-in.port';
import { Repository } from 'typeorm';
import { Comment } from '../../entity/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentQueryAdapter implements CommentInPort {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async findCommentsByPostId(postId: number): Promise<Comment[]> {
    return await this.commentRepository.find({ where: { postId: postId } });
  }

  async findAllCommentList(): Promise<Comment[]> {
    const commets = await this.commentRepository.find();
    return commets;
  }
}
