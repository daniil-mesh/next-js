'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/helpers/class-names';
import { ECategory } from '@/enums/category';
import { firstLevelMenu } from '@/helpers/first-category';
import { IMenuItem } from '@/interfaces/menu.interface';
import useMenu from '@/hooks/use-menu';

import styles from './menu.module.css';

export default function Menu() {
  const { menuList, firstCategory, secondCategory } = useMenu();
  const path = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const handleFirstLevel = (id: ECategory) => firstCategory.set(id);

  const variants = {
    visible: {
      transition: shouldReduceMotion
        ? {}
        : {
            when: 'beforeChildren',
            staggerChildren: 0.1,
          },
    },
    hidden: {},
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      display: 'block',
    },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, display: 'none' },
  };

  function buildFirstLevel() {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((m) => (
          <li key={m.route}>
            <Link
              href={`/${m.route}`}
              className={cn(styles.firstLevel, [
                styles.firstLevelActive,
                m.id === firstCategory.get,
              ])}
              onClick={() => handleFirstLevel(m.id)}
            >
              {m.icon}
              <span>{m.name}</span>
            </Link>
            {m.id === firstCategory.get && buildSecondLevel(m.route)}
          </li>
        ))}
      </ul>
    );
  }

  const handleSecondLevel = (name: string) => {
    secondCategory.set(secondCategory.get === name ? '' : name);
  };

  function buildSecondLevel(route: string) {
    return (
      <ul className={styles.secondBlock}>
        {menuList?.map((m) => {
          const isOpened = m._id.secondCategory === secondCategory.get;
          return (
            <li key={m._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => handleSecondLevel(m._id.secondCategory)}
                aria-expanded={isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={isOpened ? 'visible' : 'hidden'}
                animate={isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(route, m, isOpened)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  }

  function buildThirdLevel(route: string, m: IMenuItem, isOpened: boolean) {
    return m.pages.map((p) => (
      <motion.li key={p._id} variants={variantsChildren}>
        <Link
          href={`/${route}/${p.alias}`}
          tabIndex={isOpened ? 0 : -1}
          className={cn(styles.thirdLevel, [
            styles.thirdLevelActive,
            `/${route}/${p.alias}` === path,
          ])}
          aria-current={`/${route}/${p.alias}` == path ? 'page' : false}
        >
          {p.category}
        </Link>
      </motion.li>
    ));
  }

  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
}
