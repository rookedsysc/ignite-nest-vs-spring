import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../common/entity/base';
import { Comment } from '../../comment/entity/comment.entity';

@Entity('post')
export class Post extends Base {
  @Column({ type: 'varchar', length: 50, name: 'title' })
  title: string;

  @Column({ type: 'text', name: 'content' })
  content: string;

  @Column({ type: 'bigint', name: 'comment_count', default: 0 })
  commentCount: number;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  update(title?: string, content?: string) {
    this.title = title ?? this.title;
    this.content = content ?? this.content;
  }
}
