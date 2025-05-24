export interface IUserInfoForm {
  name: string;
  phone: string;
  email: string;
}

export interface IOrderInfoForm {
  address: string;
  deliveryDate: string;
  paymentMethod: 'CASH' | 'CARD';
}
