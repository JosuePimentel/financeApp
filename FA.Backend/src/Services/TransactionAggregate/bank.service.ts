import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankDTO } from "src/DTO'S/TransactionAggregate/bank.dto";
import { BankEntity } from 'src/Entities/TransactionAggregate/bank.entity';
import { BankModel } from 'src/Models/TransactionAggregate/bank.model';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(BankEntity)
    private readonly bankRepository: Repository<BankEntity>,
  ) {}

  async create(newBank: BankModel): Promise<BankDTO> {
    const dbBank = new BankEntity();
    dbBank.name = newBank.name;

    const { id, name } = await this.bankRepository.save(dbBank);

    return { id, name };
  }

  async finAll(): Promise<BankDTO[]> {
    return (await this.bankRepository.find()) ?? [];
  }
}
