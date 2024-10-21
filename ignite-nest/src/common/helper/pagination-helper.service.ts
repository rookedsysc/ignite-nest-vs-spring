import { DataSource, FindManyOptions } from 'typeorm';
import { Injectable, Type } from '@nestjs/common';
import { Base } from '../entity/base';
import { PageRequestDto } from '../dto/page-request.dto';
import { PageResponseDto } from '../dto/page-response.dto';

@Injectable()
export class PaginationHelper {
  constructor(private readonly dataSource: DataSource) {}

  /**
   * 페이지 조회 요청시 Page<T>를 만들어준다.
   *
   * ### 요청 방법
   * `클래스명`, `PageRequest를 상속받은 클래스`, `추가 조회 옵션들` 순서로 넘긴다.
   * ```ts
   * await this.commonService.paginate(Coupon, GetCouponListRequestDto, { withDeleted: true });
   * ```
   * @param cls 대상 클래스
   * @param pageRequest PageRequest 클래스
   * @param options TypeORM Repository에서 조회할 옵션
   */
  async paginate<T extends Base>(
    cls: Type<T>,
    pageRequest: PageRequestDto,
    options?: FindManyOptions<T>,
  ): Promise<PageResponseDto<T>> {
    const offset = pageRequest.getOffset();
    const limit = pageRequest.getLimit();

    const repository = this.dataSource.getRepository(cls);

    // 전체 아이템 개수와 현재 페이지의 아이템을 쿼리합니다.
    const [items, total] = await repository.findAndCount({
      skip: offset,
      take: limit,
      ...options,
    });

    // Page 객체 반환
    return new PageResponseDto<T>(
      total, // 총 아이템 개수
      pageRequest.currentPage ?? 1, // 현재 페이지 번호
      pageRequest.pageSize ?? 10, // 페이지당 아이템 수
      items, // 현재 페이지의 아이템들
    );
  }
}
