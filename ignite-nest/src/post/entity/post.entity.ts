import { Column, Entity } from 'typeorm';
import { Base } from '../../common/entity/base';

@Entity('post')
export class Post extends Base {
  @Column({ type: 'varchar', length: 50, name: 'title' })
  title: string;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @Column({ type: 'bigint', name: 'comment_count', default: 0 })
  commentCount: number;

  update(title?: string, content?: string) {
    this.title = title ?? this.title;
    this.content = content ?? this.content;
  }

  /**
   * 댓글 개수 차감시 value -1
   * @param value
   */
  updateCommentCount(value: number) {
    this.commentCount += value;
  }
}
