import { FormEvent, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from '@store';
import { formSelector, setFormValue } from '@services/slices/form';
import { isSendingSelector, login, LoginPayload } from '@slices/user';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import { Input } from '@components/ui/input/input';
import { formValidators } from '@models/form-validator/formValidator';
import SubmitButton from '@components/ui/submit-button/submit-button';
import * as s from './sign-in-form.module.css';

const SignInForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isSending = useSelector(isSendingSelector);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { values, handleChange, errors, isValid } = useFormWithValidation<LoginPayload>(
    formSelector,
    setFormValue,
    formValidators,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(values));
  };

  return (
    <section className={s.registration}>
      <h3 className={s.title}>Вход</h3>
      <form className={s.form} onSubmit={handleSubmit} noValidate>
        <Input
          inputRef={inputRef}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          value={values.password || ''}
          error={errors.password}
          onChange={handleChange}
          aria-invalid={!!errors.password}
        />
        <SubmitButton className={s.button} disabled={isSending || !isValid}>
          {isSending ? 'Вход...' : 'Войти'}
        </SubmitButton>
      </form>
    </section>
  );
};

export default SignInForm;
