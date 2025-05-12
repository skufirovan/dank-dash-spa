import { TButtonProps } from './type';
import * as s from './button.module.css';

const Button = ({ title, onClick, className, children }: TButtonProps) => {
  return (
    <button type="button" className={`${className} ${s.UIButton}`} onClick={onClick}>
      {title ?? children}
    </button>
  );
};

export default Button;
