import { Link } from 'react-router';
import SignInForm from '@components/sign-in-form/sign-in-form';
import * as s from './sign-in-page.module.css';

export const SignInPage = () => {
  return (
    <div className={s.signIn}>
      <SignInForm />
      <p className={s.text}>
        Нет аккаунта?{' '}
        <Link className={s.link} to="/sign-up">
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
};
