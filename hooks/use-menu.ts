import { useEffect, useState } from 'react';

import { ECategory } from '@/enums/category';
import { getMenu } from '@/api/menu';
import { IMenuItem, IMenuHookResult } from '@/interfaces/menu.interface';

export default function useMenu(): IMenuHookResult {
  const [menuList, setMenuList] = useState<IMenuItem[]>();
  const [firstCategory, setFirstCategory] = useState(ECategory.Courses);
  const [secondCategory, setSecondCategory] = useState('');

  useEffect(() => {
    const letMenu = async () => setMenuList(await getMenu(firstCategory));
    void letMenu();
  }, [firstCategory]);

  return {
    menuList,
    firstCategory: { get: firstCategory, set: setFirstCategory },
    secondCategory: { get: secondCategory, set: setSecondCategory },
  };
}
