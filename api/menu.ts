import { API } from '@/app/api';
import { IMenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number) {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({ firstCategory }),
    next: { revalidate: 60 },
  });
  const data = (await res.json()) as Promise<IMenuItem[]>;
  return data;
}
