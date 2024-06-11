import { ForwardedRef, forwardRef } from 'react';

import { cn } from '@/helpers/class-names';

import { TextareaProps } from './textarea.props';
import styles from './textarea.module.css';

function Input(
  { className, error, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className={cn(className, styles.textareaWrapper)}>
      <textarea
        className={cn(styles.textarea, [styles.error, Boolean(error)])}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
}

export default forwardRef(Input);
