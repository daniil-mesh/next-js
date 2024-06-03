import { ESortType } from '@/enums/sort';
import { IProductModel } from './product.interface';

export interface SortActions {
  type: ESortType;
}

export interface SortReducerState {
  sortType: ESortType;
  sortAsc: boolean;
  products: IProductModel[];
}
