import { IButtonProps } from '@ui/button/button';
import * as s from '@ui/button/button.module.css';

const SubmitButton = ({ title, onClick, className, children, disabled }: IButtonProps) => {
  return (
    <button
      type="submit"
      className={`${className} ${s.UIButton}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title ?? children}
    </button>
  );
};

export default SubmitButton;
