import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PageRequestDto {
  @ApiPropertyOptional({
    description: '현재 페이지 번호 (기본값: 1)',
    example: 1,
  })
  @IsNumber()
  //! Query로 받는 값은 기본적으로 string으로 인식하기 때문에 number로 변환해줘야 함
  @Type(() => Number)
  @IsOptional()
  currentPage?: number | 1;

  @ApiPropertyOptional({
    description: '페이지당 항목 수 (기본값: 10)',
    example: 10,
  })
  @IsNumber()
  //! Query로 받는 값은 기본적으로 string으로 인식하기 때문에 number로 변환해줘야 함
  @Type(() => Number)
  @IsOptional()
  pageSize?: number | 10;

  getOffset(): number {
    if (
      this.currentPage < 1 ||
      this.currentPage === null ||
      this.currentPage === undefined
    ) {
      this.currentPage = 1;
    }

    if (
      this.pageSize < 1 ||
      this.pageSize === null ||
      this.pageSize === undefined
    ) {
      this.pageSize = 10;
    }

    return (Number(this.currentPage) - 1) * Number(this.pageSize);
  }

  getLimit(): number {
    if (
      this.pageSize < 1 ||
      this.pageSize === null ||
      this.pageSize === undefined
    ) {
      this.pageSize = 10;
    }
    return Number(this.pageSize);
  }

  constructor(currentPage: number | 1, pageSize: number | 10) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
  }
}
