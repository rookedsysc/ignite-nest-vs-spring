import { Column, Entity } from 'typeorm';
import { Base } from '../../common/entity/base';

@Entity('comment')
export class Comment extends Base {
  @Column({ type: 'varchar', length: 50, name: 'title' })
  title: string;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @Column({ type: 'bigint', name: 'post_id' })
  postId: number;

  constructor(postId: number, title: string, content: string) {
    super();
    this.postId = postId;
    this.title = title;
    this.content = content;
  }
}
