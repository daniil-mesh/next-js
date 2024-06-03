'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEventHandler } from 'react';

import { cn } from '@/helpers/class-names';
import { EView } from '@/enums/view';
import Button from '@/components/button/button';
import Input from '@/components/input/input';

import { SearchProps } from './search.props';
import GlassIcon from './glass.svg';
import styles from './search.module.css';

export default function Search({
  className,
  ...props
}: SearchProps): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void router.push(`/search?q=${search}`);
  };

  return (
    <form
      className={cn(className, styles.search)}
      {...props}
      role="search"
      onSubmit={goToSearch}
    >
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        view={EView.Primary}
        className={styles.button}
        aria-label="Search on the site"
      >
        <GlassIcon />
      </Button>
    </form>
  );
}
