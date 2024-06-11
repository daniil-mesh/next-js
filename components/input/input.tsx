import { ForwardedRef, forwardRef } from 'react';

import { cn } from '@/helpers/class-names';

import { InputProps } from './input.props';
import styles from './input.module.css';

function Input(
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        className={cn(styles.input, [styles.error, Boolean(error)])}
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
