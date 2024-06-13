import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/helpers/class-names';
import LogoSvg from '@/layout/logo.svg';
import Menu from '@/layout/menu/menu';
import Search from '@/components/search/search';

import styles from './sidebar.module.css';

export default function Sidebar({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href="/">
        <LogoSvg className={styles.logo} />
      </Link>
      <Search />
      <Menu />
    </div>
  );
}
