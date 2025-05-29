import { IOrder } from '@models/IOrder';
import { IUser } from '@models/IUser';

export interface OrderResponse {
  user: IUser;
  order: IOrder;
}
