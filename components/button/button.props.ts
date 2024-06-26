import { ButtonHTMLAttributes, ReactNode } from 'react';
import { EArrow } from '@/enums/arrow';
import { EView } from '@/enums/view';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  arrow?: EArrow;
  view?: EView;
}
