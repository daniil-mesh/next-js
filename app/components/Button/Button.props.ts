import { EArrow } from '@/app/enums/Arrow';
import { EView } from '@/app/enums/View';
import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: EView;
  arrow?: EArrow;
}
