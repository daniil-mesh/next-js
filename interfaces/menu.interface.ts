import { Dispatch, SetStateAction } from 'react';

import { ECategory } from '@/enums/category';

export interface IPageItem {
  _id: string;
  alias: string;
  category: string;
  title: string;
}

export interface IMenuItem {
  _id: { secondCategory: string };
  isOpened?: boolean;
  pages: IPageItem[];
}

export interface IFirstLevelMenuItem {
  icon: JSX.Element;
  id: ECategory;
  name: string;
  route: string;
}

interface IMenuHookEntity<S> {
  get: S;
  set: Dispatch<SetStateAction<S>>;
}

export interface IMenuHookResult {
  menuList: IMenuItem[] | undefined;
  firstCategory: IMenuHookEntity<ECategory>;
  secondCategory: IMenuHookEntity<string>;
}
