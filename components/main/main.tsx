import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers/class-names';

export default function Main({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={cn([className])} {...props}>
      {children}
    </main>
  );
}
