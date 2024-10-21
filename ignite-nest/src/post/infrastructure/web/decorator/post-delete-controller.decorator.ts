import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { PostDetailDto } from '../dto/response/post-detail.dto';

export function DeletePostSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: '게시글 삭제',
      description: '게시글 ID를 통해 특정 게시글 삭제',
    }),
    ApiParam({
      name: 'postId',
      required: true,
      description: '조회할 게시글의 ID',
      example: 1,
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: '게시글 삭제 성공',
      type: PostDetailDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: '게시글을 찾을 수 없음',
    }),
  );
}
