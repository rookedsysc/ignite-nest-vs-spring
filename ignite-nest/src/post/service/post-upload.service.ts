import { Inject, Injectable } from '@nestjs/common';
import { PostUploadUsecase } from '../domain/usecase/post-upload.usecase';
import { PostUploadDto } from '../infrastructure/web/dto/request/post-upload.dto';
import { PostOutPort } from '../domain/port/out/post-out.port';
import { POST_OUT_PORT } from '../constants/post.token';

@Injectable()
export class PostUploadService implements PostUploadUsecase {
  constructor(
    @Inject(POST_OUT_PORT)
    private readonly postOutPort: PostOutPort,
  ) {}
  async uploadPost(postUpload: PostUploadDto): Promise<void> {
    await this.postOutPort.save(postUpload);
  }
}
