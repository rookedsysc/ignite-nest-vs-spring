import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CommentUploadDto } from '../dto/request/comment-upload.dto';

export function PostCommentUploadSwagger() {
  return applyDecorators(
    ApiOperation({
      summary: '댓글 작성',
      description: '특정 게시글에 새로운 댓글을 작성',
    }),
    ApiParam({
      name: 'postId',
      required: true,
      description: '댓글을 작성할 게시글의 ID',
      example: 1,
    }),
    ApiBody({
      type: CommentUploadDto,
      description: '댓글 작성 정보',
      examples: {
        comment: {
          value: {
            title: '안녕하세요',
            content: '좋은 게시글이네요!',
          },
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: '댓글 작성 성공',
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: '게시글을 찾을 수 없음',
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description:
        '잘못된 요청\n\n' +
        '- title이 필수 필드입니다.\n' +
        '- title은 문자열이어야 합니다.\n' +
        '- title은 50자를 초과할 수 없습니다.\n' +
        '- content는 문자열이어야 합니다.',
    }),
  );
}
