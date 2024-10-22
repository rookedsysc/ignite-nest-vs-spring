import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import {
  POST_CONTROLLER,
  POST_CONTROLLER_GROUP,
  POST_UPDATE_USECASE,
} from '../../constants/post.token';
import { PostUpdateUsecase } from '../../domain/usecase/post-update.usecase';
import { PostUpdateDto } from './dto/request/post-update.dto';
import { ApiTags } from '@nestjs/swagger';
import { PostUpdateSwagger } from './decorator/post-update-controller.decorator';

@ApiTags(POST_CONTROLLER_GROUP)
@Controller(POST_CONTROLLER)
export class PostUpdateController {
  constructor(
    @Inject(POST_UPDATE_USECASE)
    private readonly postUpdateUsecase: PostUpdateUsecase,
  ) {}

  @Put('/:id')
  @PostUpdateSwagger()
  async updatePost(
    @Param('id') id: number,
    @Body() updateRequest: PostUpdateDto,
  ) {
    await this.postUpdateUsecase.execute(id, updateRequest);
  }
}
