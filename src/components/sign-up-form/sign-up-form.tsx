import { FormEvent, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from '@store';
import { formSelector, setFormValue } from '@services/slices/auth-form';
import { isSendingSelector, LoginPayload, registration } from '@slices/user';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import Input from '@components/ui/input/input';
import { authFormValidators } from '@models/form-validator/formValidator';
import SubmitButton from '@components/ui/submit-button/submit-button';
import * as s from './sign-up-form.module.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isSending = useSelector(isSendingSelector);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { values, handleChange, errors, isErrors } = useFormWithValidation<LoginPayload>(
    formSelector,
    setFormValue,
    authFormValidators,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registration(values));
  };

  return (
    <section className={s.registration}>
      <h3 className={s.title}>Регистрация</h3>
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
        <SubmitButton className={s.button} disabled={isSending || isErrors()}>
          {isSending ? 'Регистрация...' : 'Зарегистрироваться'}
        </SubmitButton>
      </form>
    </section>
  );
};

export default SignUpForm;
