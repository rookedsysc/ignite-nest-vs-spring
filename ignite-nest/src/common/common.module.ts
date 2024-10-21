import { Global, Module } from '@nestjs/common';
import { PaginationHelper } from './helper/pagination-helper.service';

@Global()
@Module({
  providers: [PaginationHelper],
  exports: [PaginationHelper],
})
export class CommonModule {}
