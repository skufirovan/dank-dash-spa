import { useNavigate } from "react-router-dom";
import logo from '@images/logo-header.png';
import * as s from './app-header.module.css';
import { Button } from "../ui/button/button";

export const AppHeader = () => {
    const navigate = useNavigate();

    const isAuth = false;

    const cartClick = () => {
        navigate('/cart');
    }

    const profileClick = () => {
        navigate('/profile');
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <img src={logo} className={s.image}/>
                <nav className={s.navigation}>
                    <Button title='Корзина' onClick={cartClick}/>
                    <Button title={isAuth ? 'Профиль' : 'Войти'} onClick={profileClick}/>
                </nav>
            </div>
        </header>
    )
}