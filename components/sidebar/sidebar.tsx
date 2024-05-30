import { HTMLAttributes } from 'react';
import { cn } from '@/helpers/class-names';
import Logo from '@/components/sidebar/logo.svg';
import Menu from '@/components/menu/menu';
import Search from '../search/search';
import styles from './sidebar.module.css';
import Link from 'next/link';

export default function Sidebar({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn([className, styles.sidebar])} {...props}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <Search />
      <Menu />
    </div>
  );
}
