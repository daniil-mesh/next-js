import { ReactNode } from 'react';
import { EHtag } from '@/app/enums/Htag';

export default interface HtagProps {
  children: ReactNode;
  tag: EHtag;
}
