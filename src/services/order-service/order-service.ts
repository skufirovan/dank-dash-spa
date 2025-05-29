import $api from '@http/index';
import { OrderResponse } from '@models/order-response/OrderResponse';
import { AxiosResponse } from 'axios';

export default class OrderService {
  static async order(
    orderAmount: number,
    customerName: string,
    customerPhone: string,
    customerEmail: string,
    customerAddress: string,
    deliveryDate: string,
    paymentMethod: 'CASH' | 'CARD',
    orderComposition: string,
  ): Promise<AxiosResponse<OrderResponse>> {
    return $api.post<OrderResponse>('/order', {
      order_amount: orderAmount,
      customer_name: customerName,
      customer_phone: customerPhone,
      customer_email: customerEmail,
      customer_address: customerAddress,
      delivery_date: deliveryDate,
      payment_method: paymentMethod,
      order_composition: orderComposition,
    });
  }
}
