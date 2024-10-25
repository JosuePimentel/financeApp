import { transactionTypeEnum } from 'src/Entities/TransactionAggregate/transaction.entity';
import { BaseDTO } from '../Base/base.dto';
import { CategoryDTO } from './category.dto';
import { BankDTO } from './bank.dto';

export class TransactionDTO extends BaseDTO {
  date: Date;
  amount: number;
  transactionType: transactionTypeEnum;
  category: CategoryDTO;
  bank: BankDTO;
  accountId: string;
}
