import { EH } from '@/enums/h';
import HProps from './h.props';
import styles from './h.module.css';

export default function H({ tag, children }: HProps) {
  switch (tag) {
    case EH.H1:
      return <h1 className={styles.h1}>{children}</h1>;
    case EH.H2:
      return <h2 className={styles.h2}>{children}</h2>;
    case EH.H3:
      return <h3 className={styles.h3}>{children}</h3>;
  }
}
