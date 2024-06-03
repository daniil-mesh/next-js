'use client';

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

  const handleFirstLevel = (id: ECategory) => firstCategory.set(id);

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
        {menuList?.map((m) => (
          <li key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => handleSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            {m._id.secondCategory === secondCategory.get &&
              buildThirdLevel(route, m)}
          </li>
        ))}
      </ul>
    );
  }

  function buildThirdLevel(route: string, m: IMenuItem) {
    return (
      <ul className={styles.thirdBlock}>
        {m.pages.map((p) => {
          const href = `/${route}/${p.alias}`;
          return (
            <li key={p._id}>
              <Link
                href={href}
                className={cn(styles.thirdLevel, [
                  styles.thirdLevelActive,
                  href === path,
                ])}
              >
                {p.category}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
}
