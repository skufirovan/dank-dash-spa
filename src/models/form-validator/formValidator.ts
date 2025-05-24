import { validateDate } from '@utils/utils';

export const PWD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PHONE_REGEX = /^\+7\d{10}$/;

export const authFormValidators = {
  email: {
    validator: (value: string) => EMAIL_REGEX.test(value),
    message: 'Укажите корректный email',
  },
  password: {
    validator: (value: string) => PWD_REGEX.test(value),
    message: 'Укажите корректный пароль',
  },
};

export const userInfoFormValidators = {
  name: {
    validator: (value: string) => value.length > 2,
    message: 'Укажите Ваше имя',
  },
  phone: {
    validator: (value: string) => PHONE_REGEX.test(value),
    message: 'Укажите номер, начиная с +7',
  },
  email: {
    validator: (value: string) => EMAIL_REGEX.test(value),
    message: 'Укажите корректный email',
  },
};

export const orderInfoFormValidators = {
  address: {
    validator: (value: string) => true,
    message: 'Укажите адрес',
  },
  deliveryDate: {
    validator: (value: string) => validateDate(value),
    message: 'Укажите дату доставки',
  },
  paymentMethod: {
    validator: (value: string) => ['CASH', 'CARD'].includes(value),
    message: 'Укажите способ оплаты',
  },
};

export type TFormValidators<T> = {
  [key in keyof T]: {
    validator: (value: string) => boolean;
    message: string;
  };
};

export type TErrorState<T> = { [key in keyof T]?: string };
