import { productsSelector } from '@slices/cart';
import { useSelector } from '@store';
import CartProductCard from '@components/cart-product-card/cart-product-card';
import * as s from './cart-product-list.module.css';

const CartProductList = () => {
  const products = useSelector(productsSelector);

  return (
    <>
      <h2 className={s.title}>Корзина</h2>
      {products.map((product) => (
        <CartProductCard key={product.id} {...product} />
      ))}
    </>
  );
};

export default CartProductList;
