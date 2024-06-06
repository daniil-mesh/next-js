import { cn } from '@/helpers/class-names';
import Rating from '@/components/rating/rating';

import { ReviewProps } from './review.props';
import styles from './review.module.css';
import UserIcon from './user.svg';

export default function Review({ review, className, ...props }: ReviewProps) {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {new Date(createdAt).toLocaleDateString()}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
