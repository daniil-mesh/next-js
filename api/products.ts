import { API } from '@/app/api';
import { IProductModel } from '@/interfaces/product.interface';

export async function getProducts(category: string, limit = 10) {
  const res = await fetch(API.product.find, {
    method: 'POST',
    body: JSON.stringify({
      category,
      limit,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 60 },
  });
  const data = (await res.json()) as Promise<IProductModel[]>;
  return data;
}
