import { EPSize } from '@/enums/p-size';
import PProps from './p.props';
import styles from './p.module.css';
import { cn } from '@/helpers/class-names';

function P({ size = EPSize.Medium, children, className, ...props }: PProps) {
  return (
    <p
      className={cn([
        className,
        [styles.large, size === EPSize.Large],
        [styles.medium, size === EPSize.Medium],
        [styles.small, size === EPSize.Small],
      ])}
      {...props}
    >
      {children}
    </p>
  );
}

export default P;
