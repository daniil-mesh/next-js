import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';
import { firstLevelMenu } from '@/helpers/first-category';

export const dynamicParams = false;

export async function generateStaticParams() {
  let paths: { type: string; alias: string }[] = [];
  for (const first of firstLevelMenu) {
    const menu = await getMenu(first.id);
    paths = paths.concat(
      menu.flatMap((m) =>
        m.pages.map((p) => ({ type: first.route, alias: p.alias }))
      )
    );
  }
  return paths;
}

export default async function Page({ params }: { params: { alias: string } }) {
  const page = await getPage(params.alias);
  const products = await getProducts(params.alias);
  return (
    <>
      Course {params.alias} <br /> {page.category} <br /> {products.toString()}
    </>
  );
}
