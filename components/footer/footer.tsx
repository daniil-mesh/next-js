import React, { HTMLAttributes } from 'react';
import styles from './footer.module.css';

function Footer({ ...props }: HTMLAttributes<HTMLDivElement>) {
  console.log(styles?.a);
  return <div {...props}>Footer</div>;
}

export default Footer;
