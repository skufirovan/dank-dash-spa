import React, { useRef } from 'react';
import { addToCart, ICartProduct, removeFromCart } from '@slices/cart';
import Button from '@components/ui/button/button';
import { useDispatch } from '@services/store';
import * as s from './cart-product-card.module.css';

const CartProductCard: React.FC<ICartProduct> = ({
  id,
  image,
  name,
  description,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();
  const productRef = useRef<HTMLDivElement>(null);
  const fullImageUrl = `${process.env.URL}${image}`;

  const product = {
    id,
    image,
    name,
    description,
    quantity,
    price,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    if (quantity === 1 && productRef.current) {
      const el = productRef.current;

      el.classList.add(s.removing);

      const handleTransitionEnd = () => {
        dispatch(removeFromCart(product));
        el.removeEventListener('transitionend', handleTransitionEnd);
      };

      el.addEventListener('transitionend', handleTransitionEnd);
    } else {
      dispatch(removeFromCart(product));
    }
  };

  return (
    <div ref={productRef} className={s.product}>
      <div className={s.left}>
        <img src={fullImageUrl} className={s.image} alt="Фото" />
        <p className={s.name}>
          {name}, <span className={s.span}>{quantity} шт.</span>
        </p>
      </div>
      <div className={s.right}>
        <Button onClick={handleRemoveFromCart} className={s.button}>
          −
        </Button>
        <Button onClick={handleAddToCart} className={s.button}>
          +
        </Button>
        <p className={s.price}>{quantity * price} ₽</p>
      </div>
    </div>
  );
};

export default CartProductCard;
