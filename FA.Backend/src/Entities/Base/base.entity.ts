import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn({ name: 'create_date_column', type: 'timestamptz' })
  CreateDateColumn: Date;

  @UpdateDateColumn({ name: 'update_date_column', type: 'timestamptz' })
  UpdateDateColumn: Date;
}
