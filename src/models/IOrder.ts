export interface IOrder {
  id: string;
  orderAmount: number;
  date: string;
  status: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  deliveryDate: string;
  paymentMethod: 'CASH' | 'CARD';
  orderComposition: string;
}
