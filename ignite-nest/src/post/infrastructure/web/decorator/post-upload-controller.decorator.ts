import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PostUploadDto } from '../dto/request/post-upload.dto';

export function PostUploadSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: '게시글 생성',
      description: '제목과 내용을 입력받아 새로운 게시글을 생성',
    }),
    ApiBody({
      type: PostUploadDto,
      description: '게시글 생성 정보',
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: '게시글 생성 성공',
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: '잘못된 요청 (제목 길이 초과 또는 필수 필드 누락)',
    }),
    ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: '서버 에러',
    }),
  );
}
