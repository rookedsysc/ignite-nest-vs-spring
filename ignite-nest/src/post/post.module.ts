import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostCommandAdapter } from './infrastructure/repository/post-command.adapter';
import {
  POST_DELETE_USECASE,
  POST_DETAIL_USECASE,
  POST_IN_PORT,
  POST_LIST_USECASE,
  POST_OUT_PORT,
  POST_UPDATE_USECASE,
  POST_UPLOAD_USECASE,
} from './constants/post.token';
import { PostUploadService } from './service/post-upload.service';
import { PostUploadController } from './infrastructure/web/post-upload.controller';
import { PaginationHelper } from '../common/helper/pagination-helper.service';
import { PostQueryAdapter } from './infrastructure/repository/post-query.adapter';
import { PostListController } from './infrastructure/web/post-list.controller';
import { PostListService } from './service/post-list.service';
import { PostUpdateService } from './service/post-update.service';
import { PostUpdateController } from './infrastructure/web/post-update.controller';
import { PostDetailService } from './service/post-detail.service';
import { PostDetailController } from './infrastructure/web/post-detail.controller';
import { PostDeleteService } from './service/post-delete.service';
import { PostDeleteController } from './infrastructure/web/post-delete.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [
    {
      provide: POST_UPLOAD_USECASE,
      useClass: PostUploadService,
    },
    {
      provide: POST_LIST_USECASE,
      useClass: PostListService,
    },
    {
      provide: POST_DETAIL_USECASE,
      useClass: PostDetailService,
    },
    {
      provide: POST_UPDATE_USECASE,
      useClass: PostUpdateService,
    },
    {
      provide: POST_DELETE_USECASE,
      useClass: PostDeleteService,
    },
    {
      provide: POST_OUT_PORT,
      useClass: PostCommandAdapter,
    },
    {
      provide: POST_IN_PORT,
      useClass: PostQueryAdapter,
    },
    PaginationHelper,
  ],
  controllers: [
    PostDeleteController,
    PostUploadController,
    PostListController,
    PostUpdateController,
    PostDetailController,
  ],
  exports: [
    {
      provide: POST_IN_PORT,
      useClass: PostQueryAdapter,
    },
    {
      provide: POST_OUT_PORT,
      useClass: PostCommandAdapter,
    },
  ],
})
export class PostModule {}
