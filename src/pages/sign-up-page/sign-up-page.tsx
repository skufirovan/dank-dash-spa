import { Link } from 'react-router';
import SignUpForm from '@components/sign-up-form/sign-up-form';
import * as s from './sign-up-page.module.css';

export const SignUpPage = () => {
  return (
    <div className={s.signUp}>
      <SignUpForm />
      <p className={s.text}>
        Есть аккаунт?{' '}
        <Link className={s.link} to="/sign-in">
          Войти
        </Link>
      </p>
    </div>
  );
};
