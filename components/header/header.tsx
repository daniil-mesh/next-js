import React, { HTMLAttributes } from 'react';

import { cn } from '@/helpers/class-names';

import styles from './header.module.css';

export default function Header({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, styles.header)} {...props}>
      Header
    </div>
  );
}
