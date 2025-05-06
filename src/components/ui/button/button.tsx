import { TButtonProps } from './type';
import * as s from './button.module.css';

export const Button = ({title, onClick}: TButtonProps) => {
    return (
        <button className={s.button} onClick={onClick}>{title}</button>
    )
}