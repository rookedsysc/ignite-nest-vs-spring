import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { applyDecorators, HttpStatus } from '@nestjs/common';
import { PostDetailDto } from '../dto/response/post-detail.dto';

export function GetPostDetailSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: '게시글 상세 조회',
      description: '게시글 ID를 통해 특정 게시글의 상세 정보를 조회',
    }),
    ApiParam({
      name: 'postId',
      required: true,
      description: '조회할 게시글의 ID',
      example: 1,
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: '게시글 조회 성공',
      type: PostDetailDto,
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: '게시글을 찾을 수 없음',
    }),
  );
}
