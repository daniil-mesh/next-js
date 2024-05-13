import { ReactNode } from 'react';
import { EH } from '@/app/enums/H';

export default interface HProps {
  children: ReactNode;
  tag: EH;
}
