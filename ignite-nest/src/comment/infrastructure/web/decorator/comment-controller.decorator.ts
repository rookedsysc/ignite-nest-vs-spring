import { applyDecorators, HttpStatus } from '@nestjs/common';
import { CommentListDto } from '../dto/response/comment-list.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function GetCommentsSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: '댓글 목록 조회',
      description: '전체 댓글 목록을 조회',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: '댓글 목록 조회 성공',
      type: CommentListDto,
      isArray: true,
    }),
  );
}
