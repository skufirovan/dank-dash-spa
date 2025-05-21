import React from 'react';
import { useDispatch, useSelector } from '@store';
import { addToCart, removeFromCart, selectQuantityById } from '@slices/cart';
import Button from '@components/ui/button/button';
import { IProduct } from '@models/IProduct';
import * as s from './product-card.module.css';

type ProductCardProps = {
  product: IProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantityById(product.id));
  const fullImageUrl = `${process.env.URL}${product.image}`;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className={s.card}>
      <img src={fullImageUrl} alt={product.name} className={s.image} />
      <div className={s.textContainer}>
        <h3 className={s.name}>{product.name}</h3>
        <p className={s.description}>{product.description}</p>
        <div className={s.orderContainer}>
          <p className={s.price}>{product.price} ₽</p>
          {quantity ? (
            <div className={s.buttonContainer}>
              <Button onClick={handleRemoveFromCart} className={s.button}>
                −
              </Button>
              <p className={s.quantity}>{quantity}</p>
              <Button onClick={handleAddToCart} className={s.button}>
                +
              </Button>
            </div>
          ) : (
            <div className={s.buttonContainer}>
              <Button onClick={handleAddToCart}>Добавить</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
