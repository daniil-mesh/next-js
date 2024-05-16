import { ETagColor } from '@/enums/tag-color';
import { ETagSize } from '@/enums/tag-size';
import { TagProps } from './tag.props';
import styles from './tag.module.css';

function Tag({
  size = ETagSize.Small,
  children,
  color = ETagColor.Ghost,
  href,
  className,
  ...props
}: TagProps) {
  let cn = `${className} ${styles.tag}`;
  switch (size) {
    case ETagSize.Medium:
      cn += ` ${styles.medium}`;
      break;
    case ETagSize.Small:
      cn += ` ${styles.small}`;
  }
  switch (color) {
    case ETagColor.Ghost:
      cn += ` ${styles.ghost}`;
      break;
    case ETagColor.Green:
      cn += ` ${styles.green}`;
      break;
    case ETagColor.Grey:
      cn += ` ${styles.grey}`;
      break;
    case ETagColor.Primary:
      cn += ` ${styles.primary}`;
      break;
    case ETagColor.Red:
      cn += ` ${styles.red}`;
  }

  return (
    <div className={cn} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}

export default Tag;
