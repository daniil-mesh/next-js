import { cn } from '@/helpers/class-names';
import { ESortType } from '@/enums/sort';

import { SortProps } from './sort.props';
import SortIcon from './sort.svg';
import styles from './sort.module.css';

export default function Sort({
  sortType,
  sortAsc,
  setSort,
  className,
  ...props
}: SortProps) {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(ESortType.Rating)}
        className={cn(
          [styles.active, sortType === ESortType.Rating],
          [styles.reverse, sortType === ESortType.Rating && sortAsc]
        )}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(ESortType.Price)}
        className={cn(
          [styles.active, sortType === ESortType.Price],
          [styles.reverse, sortType === ESortType.Price && sortAsc]
        )}
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
}
