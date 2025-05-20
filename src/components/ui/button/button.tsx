import { ButtonHTMLAttributes } from 'react';
import * as s from './button.module.css';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ title, onClick, className, children, disabled }: IButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} ${s.UIButton}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title ?? children}
    </button>
  );
};

export default Button;
