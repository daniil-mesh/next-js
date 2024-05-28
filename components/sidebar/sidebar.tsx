import { HTMLAttributes } from 'react';
import { cn } from '@/helpers/class-names';
import Menu from '@/components/menu/menu';
import styles from './sidebar.module.css';

export default function Sidebar({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn([className, styles.sidebar])} {...props}>
      <Menu />
    </div>
  );
}
