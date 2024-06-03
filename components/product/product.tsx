import { cf } from '@/helpers/currency-formatter';
import { cn } from '@/helpers/class-names';
import { ETagColor } from '@/enums/tag-color';
import { EView } from '@/enums/view';
import Button from '@/components/button/button';
import Divider from '@/components/divider/divider';
import Rating from '@/components/rating/rating';
import Tag from '@/components/tag/tag';

import { ProductProps } from './product.props';
import styles from './product.module.css';

export default function Product({
  product,
  className,
  ...props
}: ProductProps) {
  return (
    <div className={className} {...props}>
      <div className={styles.product}>
        <div className={styles.logo}></div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span>
            <span className="visuallyHidden">цена </span>
            {cf(product.price)}
          </span>
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color={ETagColor.Green}>
              <span className="visuallyHidden">скидка </span>
              {cf(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          <span className="visuallyHidden">кредит </span>
          {cf(product.credit)}/<span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <span className="visuallyHidden">
            {'рейтинг ' + (product.reviewAvg ?? product.initialRating)}
          </span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((c) => (
            <Tag key={c} className={styles.category} color={ETagColor.Grey}>
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle} aria-hidden={true}>
          цена
        </div>
        <div className={styles.creditTitle} aria-hidden={true}>
          кредит
        </div>
        <div className={styles.rateTitle}>
          <a href="#ref">{product.reviewCount}</a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button view={EView.Primary}>Узнать подробнее</Button>
          <Button view={EView.Ghost} className={styles.reviewButton}>
            Читать отзывы
          </Button>
        </div>
      </div>
    </div>
  );
}
