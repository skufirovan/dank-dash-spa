export interface IUserInfoForm {
  customerName: string;
  customerPhone: string;
}

export interface IOrderInfoForm {
  customerAddress: string;
  deliveryDate: string;
  paymentMethod: 'CASH' | 'CARD';
}
