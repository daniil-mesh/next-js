import { EArrow } from '@/enums/arrow';
import { HTMLAttributes } from 'react';

export default interface ArrowImgProps extends HTMLAttributes<HTMLElement> {
  arrow?: EArrow;
}
