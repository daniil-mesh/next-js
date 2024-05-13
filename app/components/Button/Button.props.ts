import { ButtonHTMLAttributes, ReactNode } from 'react';
import { EArrow } from '@/app/enums/Arrow';
import { EView } from '@/app/enums/View';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  arrow?: EArrow;
  view?: EView;
}
