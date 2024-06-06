import { cn } from '@/helpers/class-names';
import { ETagColor, ETagSize } from '@/enums/tag';

import { TagProps } from './tag.props';
import styles from './tag.module.css';

export default function Tag({
  size = ETagSize.Small,
  children,
  color = ETagColor.Ghost,
  href,
  className,
  ...props
}: TagProps) {
  return (
    <div
      className={cn(
        className,
        styles.tag,
        [styles.medium, size === ETagSize.Medium],
        [styles.small, size === ETagSize.Small],
        [styles.ghost, color === ETagColor.Ghost],
        [styles.green, color === ETagColor.Green],
        [styles.grey, color === ETagColor.Grey],
        [styles.primary, color === ETagColor.Primary],
        [styles.red, color === ETagColor.Red]
      )}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
