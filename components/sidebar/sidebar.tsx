import { HTMLAttributes } from 'react';
import styles from './sidebar.module.css';

function Sidebar({ ...props }: HTMLAttributes<HTMLDivElement>) {
  console.log(styles?.a);
  return <div {...props}>Sidebar</div>;
}

export default Sidebar;
