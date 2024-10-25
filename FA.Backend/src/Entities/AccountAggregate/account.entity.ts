import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { TransactionEntity } from '../TransactionAggregate/transaction.entity';

@Entity('Accounts')
export class AccountEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  password: string;

  @Column({ name: 'birth_date', type: 'timestamptz' })
  birthDate: Date;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ nullable: true, type: 'varchar' })
  phone: string;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.account)
  transactions: TransactionEntity[];
}
