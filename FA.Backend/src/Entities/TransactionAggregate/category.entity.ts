import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { TransactionEntity } from './transaction.entity';

@Entity('Categories')
export class CategoryEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  icon: string;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.category)
  transactions: TransactionEntity[];
}
