import { EArrow } from '@/enums/arrow';
import { EView } from '@/enums/view';
import ArrowImg from '@/components/arrow-img/arrow-img';
import ButtonProps from './button.props';
import styles from './button.module.css';

function Button({
  view = EView.Primary,
  arrow = EArrow.None,
  children,
  className,
  ...props
}: ButtonProps) {
  let cn = className ? `${className} ` : '';
  cn += `${styles.button} `;
  switch (view) {
    case EView.Ghost:
      cn += `${styles.ghost} `;
      break;
    case EView.Primary:
      cn += `${styles.primary} `;
  }

  return (
    <button className={cn} {...props}>
      {children} <ArrowImg arrow={arrow} />
    </button>
  );
}

export default Button;
