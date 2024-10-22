import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class PostUploadDto {
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
