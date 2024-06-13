import React, { HTMLAttributes } from 'react';

import { cn } from '@/helpers/class-names';

import styles from './footer.module.css';

export default function Footer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Sakret {new Date().getFullYear()}</div>
    </footer>
  );
}
