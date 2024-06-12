import { EIconType, EIconView } from '@/enums/icon';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  view: EIconView;
  icon: EIconType;
}
