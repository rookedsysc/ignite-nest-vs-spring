import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @UpdateDateColumn({ name: 'modified' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'created' })
  createdAt: Date;
}
