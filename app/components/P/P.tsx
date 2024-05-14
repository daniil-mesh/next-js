import { EPSize } from '@/app/enums/PSize';
import PProps from './P.props';
import styles from './P.module.css';

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
