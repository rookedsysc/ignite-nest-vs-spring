import { Post } from '../../../../entity/post.entity';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class PostUploadDto extends PickType(Post, ['title', 'content']) {
  @ApiProperty({
    example: '제목',
    description: '제목',
    required: true,
  })
  @MaxLength(50)
  @IsString()
  title: string;

  @ApiProperty({
    example: '내용',
    description: '내용',
  })
  @IsString()
  content: string;
}
