import { HTMLAttributes, ReactNode } from 'react';
import { EPSize } from '@/app/enums/PSize';

export default interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: EPSize;
}
