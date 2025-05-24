import { ForwardedRef, InputHTMLAttributes, useId } from 'react';
import * as s from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
  error?: string;
  label?: string;
  value?: string;
  labelClassName?: string;
  inputClassName?: string;
  id?: string;
}

const Input = ({
  inputRef,
  error,
  value,
  label,
  labelClassName,
  inputClassName,
  id,
  ...props
}: InputProps) => {
  const randomId = useId();

  return (
    <label className={`${labelClassName} ${s.label}`} htmlFor={id}>
      {label}
      <input
        id={id || randomId}
        className={`${s.input} ${inputClassName}`}
        ref={inputRef}
        {...props}
        value={value}
      />
      <span className={value?.length && error ? s.span : s.spanHidden}>{error || '1'}</span>
    </label>
  );
};

export default Input;
