import { HTMLAttributes, ReactNode } from 'react';
import { ETagSize } from '@/app/enums/TagSize';
import { ETagColor } from '@/app/enums/TagColor';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?: ETagColor;
  href?: string;
  size?: ETagSize;
}
