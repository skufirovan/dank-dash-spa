import { TButtonProps } from './type';

const Button = ({ title, onClick, className, children }: TButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {title ?? children}
    </button>
  );
};

export default Button;
