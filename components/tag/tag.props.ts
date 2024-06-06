import { HTMLAttributes, ReactNode } from 'react';

import { ETagColor, ETagSize } from '@/enums/tag';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?: ETagColor;
  href?: string;
  size?: ETagSize;
}
