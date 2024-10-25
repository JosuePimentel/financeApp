import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { CategoryEntity } from './category.entity';
import { BankEntity } from './bank.entity';
import { AccountEntity } from '../AccountAggregate/account.entity';

export enum transactionTypeEnum {
  INCOME = 'Income',
  OUTGOING = 'Outgoing',
}

@Entity('Transactions')
export class TransactionEntity extends BaseEntity {
  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ type: 'float' })
  amount: number;

  @Column({
    type: 'enum',
    enum: transactionTypeEnum,
    default: transactionTypeEnum.INCOME,
    name: 'transaction_type',
  })
  transactionType: transactionTypeEnum;

  @ManyToOne(() => CategoryEntity, (category) => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => BankEntity, (bank) => bank.transactions)
  @JoinColumn({ name: 'bank_id' })
  bank: BankEntity;

  @ManyToOne(() => AccountEntity, (account) => account.transactions)
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;
}
