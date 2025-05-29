import { SyntheticEvent, useState } from 'react';
import { AddressSuggestions, DaDataAddressSuggestion } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useDispatch, useSelector } from '@services/store';
import { secondFormSelector, setSecondFormValue } from '@services/slices/order-form';
import { isSendingSelector, order, OrderPayload } from '@services/slices/order';
import { useFormWithValidation } from '@hooks/useFormWithValidation';
import { useOrderData } from '@hooks/useOrderData';
import { orderInfoFormValidators } from '@models/form-validator/formValidator';
import { IOrderInfoForm } from '@models/IOrderForm';
import Input from '@components/ui/input/input';
import SubmitButton from '@components/ui/submit-button/submit-button';
import Button from '@components/ui/button/button';
import * as s from './ordering-form-two.module.css';

type OrderingFormTwoProps = {
  onBack: () => void;
  onClose: () => void;
};

const OrderingFormTwo = ({ onBack, onClose }: OrderingFormTwoProps) => {
  const dispatch = useDispatch();
  const formData = useSelector(secondFormSelector);
  const [address, setAddress] = useState<DaDataAddressSuggestion | undefined>(
    formData.customerAddress
      ? ({ value: formData.customerAddress } as DaDataAddressSuggestion)
      : undefined,
  );
  const {
    customerName,
    customerPhone,
    customerEmail,
    orderAmount,
    deliveryDate,
    paymentMethod,
    orderComposition,
  } = useOrderData();
  const isSending = useSelector(isSendingSelector);

  const { values, handleChange, errors, isErrors } = useFormWithValidation<IOrderInfoForm>(
    secondFormSelector,
    setSecondFormValue,
    orderInfoFormValidators,
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setSecondFormValue({ field: 'customerAddress', value: String(address?.value) }));
    const orderData: OrderPayload = {
      orderAmount,
      customerName,
      customerPhone,
      customerEmail,
      customerAddress: String(address?.value),
      deliveryDate,
      paymentMethod,
      orderComposition,
    };
    dispatch(order(orderData));
    onClose();
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
          <SubmitButton disabled={isErrors() || isSending || address?.value?.length === 0}>
            {isSending ? 'Оформление...' : 'Оформить'}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default OrderingFormTwo;
