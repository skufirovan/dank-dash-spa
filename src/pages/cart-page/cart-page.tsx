import CartProductList from '@components/cart-product-list/cart-product-list';
import Button from '@components/ui/button/button';
import { priceSelector, quantitySelector } from '@services/slices/cart';
import { userSelector } from '@services/slices/user';
import { useSelector } from '@services/store';
import { getProductWord } from '@utils/utils';
import { useNavigate } from 'react-router-dom';
import * as s from './cart-page.module.css';

export const CartPage = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const price = useSelector(priceSelector);
  const quantity = useSelector(quantitySelector);

  const handleOrder = () => {
    if (!user) {
      navigate('/sign-in', { replace: true });
    } else {
      alert('Оформление заказа в разработке');
    }
  };

  return (
    <section className={s.cart}>
      <CartProductList />
      <div className={s.total}>
        {quantity ? (
          <>
            <Button className={s.button} onClick={handleOrder}>
              Оформить заказ
            </Button>
            <p className={s.priceText}>
              {price} ₽, {quantity} {getProductWord(quantity)}
            </p>
          </>
        ) : (
          'Ваша корзина пуста'
        )}
      </div>
    </section>
  );
};
