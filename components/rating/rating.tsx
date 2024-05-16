'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import RatingProps from './rating.props';
import StarIcon from './star.svg';
import styles from './rating.module.css';

function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
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
          <StarIcon />
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
      className={styles.wrapper}
      onMouseLeave={() => showRating(rating)}
      {...props}
    >
      {constructRating(rate)}
    </div>
  );
}

export default Rating;
