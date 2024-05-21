import { API } from '@/app/api';
import { ITopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string) {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 60 },
  });
  const data = (await res.json()) as Promise<ITopPageModel>;
  return data;
}
