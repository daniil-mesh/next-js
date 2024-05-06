import ButtonProps from './Button.props'
import { EArrow } from '@/app/enums/Arrow';
import { EView } from '@/app/enums/View';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

function Button({ view = EView.Primary, arrow = EArrow.None, children, className, ...props }: ButtonProps) {
  let arrowImg;
  switch (arrow) {
    case EArrow.Down:
      arrowImg = (<span className={`${styles.arrow} ${styles.down}`}><ArrowIcon /></span>);
      break;
    case EArrow.Right:
      arrowImg = (<span className={`${styles.arrow} ${styles.right}`}><ArrowIcon /></span>);
      break;
    default:
      arrowImg = '';
  }

  return (
    <button className={`${styles.button} ${className} ${styles[view]}`} {...props}>{children} {arrowImg}</button>
  )
}
export default Button
