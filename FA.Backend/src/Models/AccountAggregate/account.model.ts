import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class AccountModel extends BaseModel {
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsDate()
  birthDate: Date;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;
}
