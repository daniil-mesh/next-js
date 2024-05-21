import { ECategory } from '@/enums/category';
import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';

export const dynamicParams = false;

export async function generateStaticParams() {
  const menu = await getMenu(ECategory.Courses);
  return menu.flatMap((m) => m.pages.map((p) => ({ alias: p.alias })));
}

export default async function Home({ params }: { params: { alias: string } }) {
  const page = await getPage(params.alias);
  const products = await getProducts(params.alias);
  return (
    <>
      Course {params.alias} <br /> {page.category} <br /> {products.toString()}
    </>
  );
}
