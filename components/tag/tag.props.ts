import { HTMLAttributes, ReactNode } from 'react';
import { ETagSize } from '@/enums/tag-size';
import { ETagColor } from '@/enums/tag-color';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?: ETagColor;
  href?: string;
  size?: ETagSize;
}
