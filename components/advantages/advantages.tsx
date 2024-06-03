import { AdvantagesProps } from './advantages.props';
import CheckIcon from './check.svg';

import styles from './advantages.module.css';

export default function Advantages({ advantages }: AdvantagesProps) {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
}
