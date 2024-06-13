'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import React, { HTMLAttributes, useEffect, useState } from 'react';

import { ButtonIcon } from '@/components/button-icon/button-icon';
import { cn } from '@/helpers/class-names';
import { EIconType, EIconView } from '@/enums/icon';
import LogoSvg from '@/layout/logo.svg';

import { usePathname } from 'next/navigation';
import Sidebar from '../sidebar/sidebar';
import styles from './header.module.css';

export default function Header({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const path = usePathname();

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  useEffect(handleClose, [path]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href="/">
        <LogoSvg className={styles.logo} />
      </Link>
      <ButtonIcon
        view={EIconView.White}
        icon={EIconType.Menu}
        onClick={handleOpen}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          view={EIconView.White}
          icon={EIconType.Close}
          onClick={handleClose}
        />
      </motion.div>
    </header>
  );
}
