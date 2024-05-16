import { EPSize } from '@/enums/p-size';
import PProps from './p.props';
import styles from './p.module.css';

function P({ size = EPSize.Medium, children, className, ...props }: PProps) {
  let cn = className ? `${className} ` : '';
  switch (size) {
    case EPSize.Large:
      cn += `${styles.large} `;
      break;
    case EPSize.Medium:
      cn += `${styles.medium} `;
      break;
    case EPSize.Small:
      cn += `${styles.small} `;
  }

  return (
    <p className={cn} {...props}>
      {children}
    </p>
  );
}

export default P;
