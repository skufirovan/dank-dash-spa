import { Link, useNavigate } from 'react-router-dom';
import logo from '@images/logo-header.png';
import Button from '@ui/button/button';
import HeaderNavigation from '@components/header-navigation/header-navigation';
import * as s from './app-header.module.css';

const AppHeader = () => {
  const navigate = useNavigate();

  const cartClick = () => {
    navigate('/cart');
  };

  const profileClick = () => {
    navigate('/profile');
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.link}>
          <img src={logo} className={s.image} alt="Лого" />
        </Link>

        <HeaderNavigation />

        <div className={s.buttons}>
          <Button onClick={cartClick} className={s.button}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </Button>
          <Button onClick={profileClick} className={s.button}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
