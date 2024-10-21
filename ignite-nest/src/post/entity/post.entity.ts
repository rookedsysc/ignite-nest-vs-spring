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
}
