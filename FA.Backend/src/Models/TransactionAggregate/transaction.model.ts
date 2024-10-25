import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { transactionTypeEnum } from 'src/Entities/TransactionAggregate/transaction.entity';

export class TransactionModel extends BaseModel {
  @IsDate()
  date: Date;

  @IsNumber()
  amount: number;

  @IsEnum(transactionTypeEnum)
  transactionType: transactionTypeEnum;

  @IsString()
  categoryId: string;

  @IsString()
  bankId: string;

  @IsString()
  accountId: string;
}
