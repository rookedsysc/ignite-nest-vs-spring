import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  POST_CONTROLLER,
  POST_UPLOAD_USECASE,
} from '../../constants/post.token';
import { PostUploadUsecase } from '../../domain/usecase/post-upload.usecase';
import { PostUploadDto } from './dto/request/post-upload.dto';
import { PostUploadSwagger } from './decorator/post-upload-controller.decorator';

@Controller(POST_CONTROLLER)
export class PostUploadController {
  constructor(
    @Inject(POST_UPLOAD_USECASE)
    private readonly postUploadUsecase: PostUploadUsecase,
  ) {}

  @Post()
  @PostUploadSwagger()
  async uploadPost(@Body() postUploadDto: PostUploadDto) {
    await this.postUploadUsecase.uploadPost(postUploadDto);
  }
}
