import { cn } from '@/helpers/class-names';
import { EArrow } from '@/enums/arrow';
import { EView } from '@/enums/view';
import ArrowIcon from '@/components/arrow-icon/arrow-icon';
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
      {children} <ArrowIcon arrow={arrow} />
    </button>
  );
}
