'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import useScrollY from '@/hooks/use-scroll-y';

import styles from './up.module.css';
import { ButtonIcon } from '../button-icon/button-icon';
import { EIconType, EIconView } from '@/enums/icon';

export default function Up() {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    void controls.start({ opacity: y / window.innerHeight });
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
        view={EIconView.Primary}
        icon={EIconType.Up}
        onClick={scrollToTop}
      />
    </motion.div>
  );
}
