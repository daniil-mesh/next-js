import { cn } from '@/helpers/class-names';
import { EArrow } from '@/enums/arrow';
import { EView } from '@/enums/view';
import ArrowImg from '@/components/arrow-img/arrow-img';
import ButtonProps from './button.props';

import styles from './button.module.css';

export default function Button({
  view = EView.Primary,
  arrow = EArrow.None,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        className,
        styles.button,
        [styles.ghost, view === EView.Ghost],
        className,
        className,
        className,
        className,
        className,
        className,
        className,
        [styles.primary, view === EView.Primary]
      )}
      {...props}
    >
      {children} <ArrowImg arrow={arrow} />
    </button>
  );
}
