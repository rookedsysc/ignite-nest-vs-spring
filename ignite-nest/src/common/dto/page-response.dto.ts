import { ApiProperty } from '@nestjs/swagger';

export class PageResponse<T> {
  @ApiProperty({
    description: '전체 데이터에서 현재 페이지의 첫 번째 아이템의 인덱스',
    example: 0,
  })
  startIdx: number;

  @ApiProperty({
    description: '전체 데이터에서 현재 페이지의 마지막 아이템의 인덱스',
    example: 9,
  })
  endIdx: number;

  @ApiProperty({
    description: '페이지당 아이템 수',
    example: 10,
  })
  size: number;

  @ApiProperty({
    description: '모든 페이지에 걸친 아이템의 개수',
    example: 100,
  })
  total: number;

  @ApiProperty({
    description: '현재 페이지 번호',
    example: 1,
  })
  currentPage: number;

  @ApiProperty({
    description: '마지막 페이지 번호',
    example: 10,
  })
  lastPage: number;

  @ApiProperty({
    description: '현재 페이지에 포함된 아이템 리스트',
    type: 'array', // Swagger에서 배열임을 명시
    isArray: true, // 배열로 설정
  })
  items: T[];

  constructor(total: number, currentPage: number, size: number, items: T[]) {
    this.startIdx = (currentPage - 1) * size;
    this.endIdx = Math.min(this.startIdx + size - 1, total - 1);
    this.size = size;
    this.total = total;
    this.currentPage = currentPage;
    this.items = items;
    this.lastPage = Math.ceil(total / size);
  }
}
