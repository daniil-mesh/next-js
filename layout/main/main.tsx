import React, { HTMLAttributes } from 'react';

export default function Main({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={className} {...props}>
      {children}
    </main>
  );
}
