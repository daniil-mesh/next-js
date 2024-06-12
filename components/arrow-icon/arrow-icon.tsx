import { EArrow } from '@/enums/arrow';

import ArrowImgProps from './arrow-icon.props';
import ArrowSvg from './arrow.svg';
import styles from './arrow-icon.module.css';

export default function ArrowIcon({ arrow }: ArrowImgProps) {
  let cn = styles.arrow;
  switch (arrow) {
    case EArrow.None:
      return <></>;
    case EArrow.Right:
      break;
    case EArrow.Down:
      cn += ` ${styles.down}`;
  }

  return (
    <span className={cn}>
      <ArrowSvg />
    </span>
  );
}
