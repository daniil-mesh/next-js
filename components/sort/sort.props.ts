import { HTMLAttributes } from 'react';

import { ESortType } from '@/enums/sort';

export interface SortProps extends HTMLAttributes<HTMLDivElement> {
  sortType: ESortType;
  sortAsc: boolean;
  setSort: (sort: ESortType, asc?: boolean) => void;
}
