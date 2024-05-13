import { EArrow } from '@/app/enums/Arrow';
import { HTMLAttributes } from 'react';

export default interface ArrowImgProps extends HTMLAttributes<HTMLElement> {
  arrow?: EArrow;
}
