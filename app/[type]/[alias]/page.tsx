import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EH } from '@/enums/h';
import { ETagColor } from '@/enums/tag-color';
import { firstLevelMenu } from '@/helpers/first-category';
import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';
import Advantages from '@/components/advantages/advantages';
import H from '@/components/h/h';
import HhCard from '@/components/hh-card/hh-card';
import Products from '@/components/products/products';
import Tag from '@/components/tag/tag';

import { AliasPageProps } from './page.props';
import styles from './page.module.css';

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

export async function generateMetadata({
  params,
}: AliasPageProps): Promise<Metadata> {
  const page = await getPage(params.alias);
  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  };
}

export default async function AliasPage({ params }: AliasPageProps) {
  const page = await getPage(params.alias);
  const products = await getProducts(page.category);

  if (!page || !products || !params) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <Products products={products} title={page.title} />
      <div className={styles.hhTitle}>
        <H tag={EH.H2}>Вакансии - {page.category}</H>
        <Tag color={ETagColor.Red}>hh.ru</Tag>
      </div>
      {page.hh && <HhCard {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <H tag={EH.H2}>Преимущства</H>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <H tag={EH.H2}>Получаемые навыки</H>
      {page.tags.map((t) => (
        <Tag key={t} color={ETagColor.Grey}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
