import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostCommandAdapter } from './infrastructure/repository/post-command.adapter';
import {
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
      provide: POST_UPDATE_USECASE,
      useClass: PostUpdateService,
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
  controllers: [PostUploadController, PostListController, PostUpdateController],
})
export class PostModule {}
