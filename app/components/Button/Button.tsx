import { EArrow } from '@/app/enums/Arrow';
import { EView } from '@/app/enums/View';
import ArrowImg from '../ArrowImg/ArrowImg';
import ButtonProps from './Button.props';
import styles from './Button.module.css';

function Button({
  view = EView.Primary,
  arrow = EArrow.None,
  children,
  className,
  ...props
}: ButtonProps) {
  let cn = `${className} ${styles.button}`;
  switch (view) {
    case EView.Ghost:
      cn += ` ${styles.ghost}`;
      break;
    case EView.Primary:
      cn += ` ${styles.primary}`;
  }

  return (
    <button className={cn} {...props}>
      {children} <ArrowImg arrow={arrow} />
    </button>
  );
}

export default Button;
