import { ForwardedRef, forwardRef } from 'react';

import Divider from '@/components/divider/divider';
import Review from '@/components/review/review';
import ReviewForm from '@/components/review-form/review-form';

import { ReviewsProps } from './reviews.props';
import styles from './reviews.module.css';
import { cn } from '@/helpers/class-names';

function Reviews(
  { product, className, ...props }: ReviewsProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={cn(styles.reviews, className)} ref={ref} {...props}>
      {product.reviews.map((r) => (
        <article key={r._id} className={styles.reviewBlock}>
          <Review review={r} />
          <Divider />
        </article>
      ))}
      <ReviewForm productId={product._id} />
    </div>
  );
}

export default forwardRef(Reviews);
