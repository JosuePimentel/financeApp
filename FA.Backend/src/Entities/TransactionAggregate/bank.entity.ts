import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { TransactionEntity } from './transaction.entity';

@Entity('Banks')
export class BankEntity extends BaseEntity {
  @OneToMany(() => TransactionEntity, (transaction) => transaction.bank)
  transactions: TransactionEntity[];
}
