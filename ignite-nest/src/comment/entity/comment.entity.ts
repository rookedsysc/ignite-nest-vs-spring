import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../common/entity/base';
import { Post } from '../../post/entity/post.entity';

@Entity('comment')
export class Comment extends Base {
  @Column({ type: 'varchar', length: 50, name: 'title' })
  title: string;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
