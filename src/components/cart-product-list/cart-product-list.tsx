import { priceSelector, productsSelector, quantitySelector } from '@slices/cart';
import { useSelector } from '@store';
import CartProductCard from '@components/cart-product-card/cart-product-card';
import { getProductWord } from '@utils/utils';
import Button from '@components/ui/button/button';
import { userSelector } from '@services/slices/user';
import { useNavigate } from 'react-router';
import * as s from './cart-product-list.module.css';

const CartProductList = () => {
  const navigate = useNavigate();
  const products = useSelector(productsSelector);
  const price = useSelector(priceSelector);
  const quantity = useSelector(quantitySelector);
  const user = useSelector(userSelector);

  const handleOrder = () => {
    if (!user) {
      navigate('/sign-in', { replace: true });
    } else {
      alert('Оформление заказа в разработке');
    }
  };

  return (
    <section className={s.cart}>
      <h2 className={s.title}>Корзина</h2>
      <div className={s.gridContainer}>
        {products.map((product) => (
          <CartProductCard key={product.id} {...product} />
        ))}
      </div>
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

export default CartProductList;
