import { HTMLAttributes } from 'react';

import { IProductModel } from '@/interfaces/product.interface';

export interface ReviewsProps extends HTMLAttributes<HTMLDivElement> {
  product: IProductModel;
}
