import React, { HTMLAttributes } from 'react';
import styles from './header.module.css';

function Header({ ...props }: HTMLAttributes<HTMLDivElement>) {
  console.log(styles?.a);
  return <div {...props}>Header</div>;
}

export default Header;
