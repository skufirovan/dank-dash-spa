import { useSelector } from '@services/store';
import { firstFormSelector, secondFormSelector } from '@services/slices/order-form';
import { priceSelector, productsSelector } from '@services/slices/cart';
import { userSelector } from '@services/slices/user';

export const useOrderData = () => {
  const { customerName, customerPhone } = useSelector(firstFormSelector);
  const { deliveryDate, paymentMethod, customerAddress } = useSelector(secondFormSelector);
  const orderAmount = useSelector(priceSelector);
  const customerEmail = useSelector(userSelector)!.email;
  const cartProducts = useSelector(productsSelector);

  const orderComposition = cartProducts
    .map((item) => `${item.name} ${item.quantity} шт.`)
    .join(', ');

  return {
    orderAmount,
    customerName,
    customerPhone,
    customerEmail,
    customerAddress,
    deliveryDate,
    paymentMethod,
    orderComposition,
  };
};
