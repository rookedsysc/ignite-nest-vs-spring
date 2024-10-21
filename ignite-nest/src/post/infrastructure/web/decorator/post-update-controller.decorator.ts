import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { PostUpdateDto } from '../dto/request/post-update.dto';

export function PostUpdateSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: '게시글 수정',
      description: '게시글 ID를 통해 해당 게시글의 내용을 수정',
    }),
    ApiParam({
      name: 'id',
      required: true,
      description: '수정할 게시글의 ID',
      example: 1,
    }),
    ApiBody({
      type: PostUpdateDto,
      description: '게시글 수정 정보, 변경할 값 없으면 null 허용',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: '게시글 수정 성공',
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: '게시글을 찾을 수 없음',
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: '잘못된 요청 (제목 길이 초과 또는 필수 필드 누락)',
    }),
  );
}
