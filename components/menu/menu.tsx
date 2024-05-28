'use client';

import { cn } from '@/helpers/class-names';
import { ECategory } from '@/enums/category';
import { firstLevelMenu } from '@/helpers/first-category';
import { IMenuItem } from '@/interfaces/menu.interface';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useMenu from '@/hooks/use-menu';
import styles from './menu.module.css';

export default function Menu() {
  const { menuList, firstCategory, secondCategory } = useMenu();
  const path = usePathname();

  const handleFirstLevel = (id: ECategory) => firstCategory.set(id);

  function buildFirstLevel() {
    return firstLevelMenu.map((m) => (
      <div key={m.route}>
        <div
          className={cn([
            styles.firstLevel,
            [styles.firstLevelActive, m.id === firstCategory.get],
          ])}
          onClick={() => handleFirstLevel(m.id)}
        >
          {m.icon}
          <span>{m.name}</span>
        </div>
        {m.id === firstCategory.get && buildSecondLevel(m.route)}
      </div>
    ));
  }

  const handleSecondLevel = (name: string) => {
    secondCategory.set(secondCategory.get === name ? '' : name);
  };

  function buildSecondLevel(route: string) {
    return (
      <div>
        {menuList?.map((m) => (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => handleSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            {m._id.secondCategory === secondCategory.get &&
              buildThirdLevel(route, m)}
          </div>
        ))}
      </div>
    );
  }

  function buildThirdLevel(route: string, m: IMenuItem) {
    return (
      <div
        className={cn([
          styles.secondLevelBlock,
          [styles.secondLevelBlockOpened, m.isOpened],
        ])}
      >
        {m.pages.map((p) => {
          const href = `/${route}/${p.alias}`;
          return (
            <Link
              key={p._id}
              href={href}
              className={cn([
                styles.thirdLevel,
                [styles.thirdLevelActive, href === path],
              ])}
            >
              {p.category}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <nav>
      <ul>{buildFirstLevel()}</ul>
    </nav>
  );
}
