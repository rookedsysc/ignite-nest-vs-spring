import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostCommandAdapter } from './infrastructure/repository/post-command.adapter';
import { POST_OUT_PORT, POST_UPLOAD_USECASE } from './constants/post.token';
import { PostUploadService } from './service/post-upload.service';
import { PostUploadController } from './infrastructure/web/post-upload.controller';
import { PaginationService } from '../common/service/pagination.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [
    {
      provide: POST_UPLOAD_USECASE,
      useClass: PostUploadService,
    },
    {
      provide: POST_OUT_PORT,
      useClass: PostCommandAdapter,
    },
    PaginationService,
  ],
  controllers: [PostUploadController],
})
export class PostModule {}
