import { HTMLAttributes, ReactNode } from 'react';
import { EPSize } from '@/enums/p-size';

export default interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: EPSize;
}
