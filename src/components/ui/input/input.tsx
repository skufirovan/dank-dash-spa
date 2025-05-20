import { ForwardedRef, InputHTMLAttributes, useId } from 'react';
import * as s from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
  error?: string;
  value?: string;
  className?: string;
  id?: string;
}

export const Input = ({
  inputRef,
  error = '',
  value = '',
  className,
  id = '',
  ...props
}: InputProps) => {
  const randomId = useId();

  return (
    <label className={`${className} ${s.label}`} htmlFor={id}>
      <input id={id || randomId} className={s.input} ref={inputRef} {...props} value={value} />
      <span className={s.span}>{error || ''}</span>
    </label>
  );
};
