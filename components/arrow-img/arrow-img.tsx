import { EArrow } from '@/enums/arrow';
import ArrowIcon from './arrow.svg';
import ArrowImgProps from './arrow-img.props';
import styles from './arrow-img.module.css';

function ArrowImg({ arrow }: ArrowImgProps) {
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
      <ArrowIcon />
    </span>
  );
}

export default ArrowImg;
