'use client';

import { useEffect, useReducer } from 'react';

import { EH } from '@/enums/h';
import { ESortType } from '@/enums/sort';
import { ETagColor } from '@/enums/tag';
import { sortReducer } from '@/hooks/sort-reducer';
import H from '@/components/h/h';
import Product from '@/components/product/product';
import Sort from '@/components/sort/sort';
import Tag from '@/components/tag/tag';

import { ProductsProps } from './products.props';
import styles from './products.module.css';

export default function Products({ products, title }: ProductsProps) {
  const [{ products: sortedProducts, sortType, sortAsc }, dispatchSort] =
    useReducer(sortReducer, {
      products,
      sortType: ESortType.Rating,
      sortAsc: true,
    });

  const setSort = (type: ESortType) => {
    dispatchSort({ type });
  };

  useEffect(() => {
    dispatchSort({ type: ESortType.Rating });
  }, [products]);

  return (
    <>
      <div className={styles.title}>
        <H tag={EH.H1}>{title}</H>
        <Tag color={ETagColor.Grey} aria-label={products.length + 'элементов'}>
          {products.length}
        </Tag>
        <Sort sortType={sortType} sortAsc={sortAsc} setSort={setSort} />
      </div>
      <div role="list">
        {sortedProducts.map((p) => (
          <Product role="listitem" key={p._id} product={p} layout />
        ))}
      </div>
    </>
  );
}
