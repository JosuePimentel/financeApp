import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankDTO } from "src/DTO'S/TransactionAggregate/bank.dto";
import { BankModel } from 'src/Models/TransactionAggregate/bank.model';
import { BankService } from 'src/Services/TransactionAggregate/bank.service';

@ApiTags('Bank')
@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  async create(@Body() bank: BankModel): Promise<BankDTO> {
    return await this.bankService.create(bank);
  }

  @Get()
  async findAll(): Promise<BankDTO[]> {
    return await this.bankService.finAll();
  }
}
