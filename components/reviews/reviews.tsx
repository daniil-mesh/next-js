import { ForwardedRef, forwardRef } from 'react';

import Divider from '@/components/divider/divider';
import Review from '@/components/review/review';
import ReviewForm from '@/components/review-form/review-form';

import { ReviewsProps } from './reviews.props';
import styles from './reviews.module.css';

function Reviews({ product }: ReviewsProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div className={styles.reviews} ref={ref}>
      {product.reviews.map((r) => (
        <article key={r._id}>
          <Review review={r} />
          <Divider />
        </article>
      ))}
      <ReviewForm productId={product._id} />
    </div>
  );
}

export default forwardRef(Reviews);
