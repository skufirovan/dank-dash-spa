import React from 'react';
import { TProduct } from '@utils/types';
import * as s from './product-card.module.css';

type ProductCardProps = {
  product: TProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const fullImageUrl = `${process.env.URL}${product.image}`;

  return (
    <div className={s.card}>
      <img src={fullImageUrl} alt={product.name} className={s.image} />
      <div className={s.textContainer}>
        <h3 className={s.name}>{product.name}</h3>
        <p className={s.description}>{product.description}</p>
        <div className={s.orderContainer}>
          <p className={s.price}>{product.price} ₽</p>
          <button type="button" className={s.button}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
