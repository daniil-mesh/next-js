import { useEffect, useState } from 'react';

export default function useScrollY() {
  const isBrowser = typeof window !== 'undefined';

  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(isBrowser ? window.scrollY : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrowser]);

  return scrollY;
}
