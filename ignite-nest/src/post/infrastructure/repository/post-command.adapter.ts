import { Inject, Injectable } from '@nestjs/common';
import { PostOutPort } from 'src/post/domain/port/out/post-out.port';
import { Post } from 'src/post/entity/post.entity';
import { PostUploadDto } from '../web/dto/request/post-upload.dto';
import { Repository } from 'typeorm';
import { PostMapper } from 'src/post/mapper/post.mapper';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostCommandAdapter implements PostOutPort {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async save(postUploadDto: PostUploadDto): Promise<Post> {
    const post = PostMapper.toEntity(postUploadDto);
    return this.postRepository.save(post);
  }
}
