'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import useScrollY from '@/hooks/use-scroll-y';

import ButtonIcon from './up.svg';
import styles from './up.module.css';

export default function Up() {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    void controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon
        appearance="primary"
        icon="up"
        aria-label="Наверх"
        onClick={scrollToTop}
      />
    </motion.div>
  );
}
