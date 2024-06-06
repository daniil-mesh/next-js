import { HTMLAttributes } from 'react';

import { IReviewModel } from '@/interfaces/product.interface';

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  review: IReviewModel;
}
