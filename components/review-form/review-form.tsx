import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { cn } from '@/helpers/class-names';
import { createReview } from '@/api/review';
import { IReviewForm } from '@/interfaces/review-form.interface';
import Button from '@/components/button/button';
import Input from '@/components/input/input';
import Rating from '@/components/rating/rating';
import Textarea from '@/components/textarea/textarea';

import { ReviewFormProps } from './review-form.props';
import CloseIcon from './close.svg';
import styles from './review-form.module.css';

export default function ReviewForm({
  className,
  productId,
  ...props
}: ReviewFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const onSubmit: SubmitHandler<IReviewForm> = async (data) => {
    const res = await createReview(data, productId);
    console.log(res);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Заполните имя' },
          })}
          placeholder="Имя"
          error={errors.name}
          // tabIndex={isOpened ? 0 : -1}
          // aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register('title', {
            required: { value: true, message: 'Заполните заголовок' },
          })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
          // tabIndex={isOpened ? 0 : -1}
          // aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
                // tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Заполните описание' },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
          // tabIndex={isOpened ? 0 : -1}
          aria-label="Текст отзыва"
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button>Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>

      <div className={cn(styles.success, styles.panel)} role="alert">
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <button className={styles.close} aria-label="Закрыть оповещение">
          <CloseIcon />
        </button>
      </div>
      <div className={cn(styles.error, styles.panel)} role="alert">
        Что-то пошло не так, попробуйте обновить страницу
        <button className={styles.close} aria-label="Закрыть оповещение">
          <CloseIcon />
        </button>
      </div>
    </form>
  );
}
