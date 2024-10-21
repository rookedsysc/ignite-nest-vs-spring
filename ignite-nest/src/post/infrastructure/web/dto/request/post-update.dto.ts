import { PartialType } from '@nestjs/swagger';
import { PostUploadDto } from './post-upload.dto';

export class PostUpdateDto extends PartialType(PostUploadDto) {}
