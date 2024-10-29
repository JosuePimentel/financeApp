import { Module } from '@nestjs/common';
import { BankController } from 'src/Controllers/TransactionAggregate/bank.controller';
import { BankService } from 'src/Services/TransactionAggregate/bank.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from 'src/Entities/TransactionAggregate/bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
