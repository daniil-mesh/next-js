import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers/class-names';
import styles from './footer.module.css';

function Footer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={cn([className, styles.footer])} {...props}>
      <div>Sakret {new Date().getFullYear()}</div>
      <a href="#" target="_blank">
        1
      </a>
      <a href="#" target="_blank">
        2
      </a>
    </footer>
  );
}

export default Footer;
