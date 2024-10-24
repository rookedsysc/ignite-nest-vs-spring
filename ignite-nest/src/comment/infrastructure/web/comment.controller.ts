import { Controller, Get, Inject, Query } from '@nestjs/common';
import { CommentListUsecase } from '../../domain/usecase/comment-list.usecase';
import { ApiTags } from '@nestjs/swagger';
import {
  COMMENT_CONTROLLER,
  COMMENT_CONTROLLER_GROUP,
  COMMENT_LIST_USECASE,
} from '../../constants/comment.token';
import { GetCommentsSwagger } from './decorator/comment-controller.decorator';
import { PageRequestDto } from '../../../common/dto/page-request.dto';

@ApiTags(COMMENT_CONTROLLER_GROUP)
@Controller(COMMENT_CONTROLLER)
export class CommentController {
  constructor(
    @Inject(COMMENT_LIST_USECASE)
    private readonly commentListUsecase: CommentListUsecase,
  ) {}

  @Get()
  @GetCommentsSwagger()
  async getComments(@Query() request: PageRequestDto) {
    return await this.commentListUsecase.execute(request);
  }
}
