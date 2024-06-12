'use client';

import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';

import RatingProps from './rating.props';
import StarSvg from './star.svg';
import styles from './rating.module.css';
import { cn } from '@/helpers/class-names';

function Rating(
  { isEditable = false, rating, setRating, error, ...props }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [rate, setRate] = useState(rating);
  const ratingArray = new Array(5).fill(<></>);

  useEffect(() => {
    setRate(rating);
  }, [rating]);

  function constructRating(currentRating: number) {
    const updatedArray = ratingArray.map((_, i) => {
      let cn = styles.star;
      cn += currentRating > i ? ` ${styles.fill}` : '';
      cn += isEditable ? ` ${styles.editable}` : '';
      return (
        <span
          key={i}
          className={cn}
          onMouseEnter={() => showRating(i + 1)}
          onClick={() => changeRating(i + 1)}
          onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => {
            changeRatingBySpace(i + 1, e);
          }}
          tabIndex={isEditable ? 0 : -1}
        >
          <StarSvg />
        </span>
      );
    });
    return updatedArray;
  }

  function showRating(numb: number) {
    if (!isEditable) {
      return;
    }
    setRate(numb);
  }

  function changeRating(numb: number) {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(numb);
  }

  function changeRatingBySpace(
    numb: number,
    e: KeyboardEvent<HTMLSpanElement>
  ) {
    if (!isEditable || !setRating || e.code !== 'Space') {
      return;
    }
    setRating(numb);
  }

  return (
    <div
      ref={ref}
      className={cn(styles.wrapper, [styles.error, Boolean(error)])}
      onMouseLeave={() => showRating(rating)}
      {...props}
    >
      {constructRating(rate)}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
}

export default forwardRef(Rating);
