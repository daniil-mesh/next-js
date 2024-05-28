'use client';

import { cn } from '@/helpers/class-names';
import { firstLevelMenu } from '@/helpers/first-category';
import { IMenuItem } from '@/interfaces/menu.interface';
import useMenu from '@/hooks/use-menu';
import styles from './menu.module.css';

export default function Menu() {
  const { menuList, firstCategory, secondCategory } = useMenu();

  function buildFirstLevel() {
    return firstLevelMenu.map((m) => (
      <div key={m.route}>
        <a href={`/${m.route}`}>
          <div
            className={cn([
              styles.firstLevel,
              [styles.firstLevelActive, m.id === firstCategory.get],
            ])}
            onClick={(e) => {
              e.preventDefault();
              firstCategory.set(m.id);
            }}
          >
            {m.icon}
            <span>{m.name}</span>
          </div>
        </a>
        {m.id === firstCategory.get && buildSecondLevel(m.route)}
      </div>
    ));
  }

  function buildSecondLevel(route: string) {
    return (
      <div>
        {menuList?.map((m) => (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={(e) => {
                e.preventDefault();
                secondCategory.set(m._id.secondCategory);
              }}
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
        {m.pages.map((p) => (
          <a
            key={p._id}
            href={`/${route}/${p.alias}`}
            className={cn([styles.thirdLevel])}
          >
            {p.category}
          </a>
        ))}
      </div>
    );
  }

  return (
    <nav>
      <ul>{buildFirstLevel()}</ul>
    </nav>
  );
}
