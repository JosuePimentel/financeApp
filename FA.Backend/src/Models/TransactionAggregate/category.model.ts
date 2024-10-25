import { IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class CategoryModel extends BaseModel {
  @IsString()
  icon: string;
}
