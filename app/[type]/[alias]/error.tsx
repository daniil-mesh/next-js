'use client';

export default function Error({ error }: { error: Error }) {
  return <>Error: {error.message}</>;
}
