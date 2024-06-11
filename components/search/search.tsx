'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';

import { cn } from '@/helpers/class-names';
import { EView } from '@/enums/view';
import Button from '@/components/button/button';
import Input from '@/components/input/input';

import { SearchProps } from './search.props';
import GlassIcon from './glass.svg';
import styles from './search.module.css';

export default function Search({ className, ...props }: SearchProps) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);

  const handleForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <form
      className={cn(className, styles.search)}
      {...props}
      role="search"
      onSubmit={handleForm}
    >
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={handleInput}
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
