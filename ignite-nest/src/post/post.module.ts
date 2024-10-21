import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { PostCommandAdapter } from './infrastructure/repository/post-command.adapter';
import { PostUploadService } from './service/post-upload.service';
import { POST_OUT_PORT } from './constants/post.token';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [
    PostUploadService,
    {
      provide: POST_OUT_PORT,
      useClass: PostCommandAdapter,
    },
  ],
})
export class PostModule {}
