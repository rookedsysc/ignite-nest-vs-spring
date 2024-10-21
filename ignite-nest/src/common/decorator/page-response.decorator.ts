import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  getSchemaPath,
} from '@nestjs/swagger';
import { PageResponseDto } from '../dto/page-response.dto';

export function PageResponseDecorator(cls: Type) {
  return applyDecorators(
    ApiOperation({
      summary: `${cls.name} 목록 조회`,
    }),
    ApiExtraModels(PageResponseDto, cls),
    ApiOkResponse({
      description: `쿠폰 목록 조회 성공`,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageResponseDto) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(cls) },
              },
            },
          },
        ],
      },
      isArray: true,
    }),
  );
}
