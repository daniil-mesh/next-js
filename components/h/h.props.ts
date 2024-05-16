import { ReactNode } from 'react';
import { EH } from '@/enums/h';

export default interface HProps {
  children: ReactNode;
  tag: EH;
}
