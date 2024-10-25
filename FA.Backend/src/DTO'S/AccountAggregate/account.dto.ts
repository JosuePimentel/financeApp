import { BaseDTO } from '../Base/base.dto';

export class AccountDTO extends BaseDTO {
  password: string;
  birthDate: Date;
  email: string;
  phone: string;
}
