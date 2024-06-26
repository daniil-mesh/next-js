import { HTMLAttributes } from 'react';

import { IProductModel } from '@/interfaces/product.interface';

export interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  product: IProductModel;
}
