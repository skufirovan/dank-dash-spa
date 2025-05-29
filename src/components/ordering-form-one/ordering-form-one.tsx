import { SyntheticEvent, useLayoutEffect, useRef } from 'react';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import { firstFormSelector, setFisrtFormValue } from '@services/slices/order-form';
import { userInfoFormValidators } from '@models/form-validator/formValidator';
import { IUserInfoForm } from '@models/IOrderForm';
import Input from '@components/ui/input/input';
import SubmitButton from '@components/ui/submit-button/submit-button';
import * as s from './ordering-form-one.module.css';

type OrderingFormOneProps = {
  onNext: () => void;
};

const OrderingFormOne = ({ onNext }: OrderingFormOneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { values, handleChange, errors, isErrors } = useFormWithValidation<IUserInfoForm>(
    firstFormSelector,
    setFisrtFormValue,
    userInfoFormValidators,
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <Input
          inputRef={inputRef}
          type="text"
          name="customerName"
          id="customerName"
          label="Имя"
          value={values.customerName}
          error={errors.customerName}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="customerPhone"
          id="customerPhone"
          label="Телефон"
          value={values.customerPhone}
          error={errors.customerPhone}
          onChange={handleChange}
        />
        <div className={s.buttonContainer}>
          <SubmitButton disabled={isErrors()}>Далее</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default OrderingFormOne;
