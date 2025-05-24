import { SyntheticEvent, useState } from 'react';
import { AddressSuggestions, DaDataAddressSuggestion } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useDispatch, useSelector } from '@services/store';
import { secondFormSelector, setSecondFormValue } from '@services/slices/order-form';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import { orderInfoFormValidators } from '@models/form-validator/formValidator';
import { IOrderInfoForm } from '@models/IOrderForm';
import Input from '@components/ui/input/input';
import SubmitButton from '@components/ui/submit-button/submit-button';
import Button from '@components/ui/button/button';
import * as s from './ordering-form-two.module.css';

type OrderingFormTwoProps = {
  onBack: () => void;
};

const OrderingFormTwo = ({ onBack }: OrderingFormTwoProps) => {
  const dispatch = useDispatch();
  const formData = useSelector(secondFormSelector);
  const [address, setAddress] = useState<DaDataAddressSuggestion | undefined>(
    formData.address ? ({ value: formData.address } as DaDataAddressSuggestion) : undefined,
  );

  const { values, handleChange, errors, isErrors } = useFormWithValidation<IOrderInfoForm>(
    secondFormSelector,
    setSecondFormValue,
    orderInfoFormValidators,
  );

  const handleSubmit = (e: SyntheticEvent) => {
    dispatch(setSecondFormValue({ field: 'address', value: String(address?.value) }));
    e.preventDefault();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.field}>Адрес доставки</p>
        <AddressSuggestions
          token={process.env.DADATA!}
          value={address}
          onChange={setAddress}
          count={4}
        />
        <Input
          type="date"
          name="deliveryDate"
          id="dateField"
          label="Дата доставки"
          value={values.deliveryDate}
          error={errors.deliveryDate}
          onChange={handleChange}
        />
        <p className={s.field}>Способ оплаты</p>
        <div className={s.radioContainer}>
          <label className={s.radio} htmlFor="radio-cash">
            <input
              type="radio"
              name="paymentMethod"
              id="radio-cash"
              value="CASH"
              checked={values.paymentMethod === 'CASH'}
              onChange={handleChange}
            />
            Наличные
          </label>
          <label className={s.radio} htmlFor="radio-card">
            <input
              type="radio"
              name="paymentMethod"
              id="radio-card"
              value="CARD"
              checked={values.paymentMethod === 'CARD'}
              onChange={handleChange}
            />
            Банковская карта
          </label>
        </div>

        <div className={s.buttonContainer}>
          <Button onClick={onBack}>Назад</Button>
          <SubmitButton disabled={isErrors() || address?.value?.length === 0}>
            Заказать
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default OrderingFormTwo;
