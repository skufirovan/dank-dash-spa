import { useRef } from 'react';
import { useSelector } from '@store';
import { selectProductsState } from '@slices/products';
import Preloader from '@components/ui/preloader/preloader';
import ErrorMessage from '@components/ui/error-message/error-message';
import ProductCard from '@components/product-card/product-card';
import { useSectionObserver } from '@hooks/useSectionObserver';
import * as s from './product-list.module.css';

const ProductList = () => {
  const { data, isLoading, error } = useSelector(selectProductsState);
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionObserver({ id: 'shop', ref: sectionRef });

  if (error) return <ErrorMessage message={error.message ?? 'Неизвестная ошибка'} />;

  return (
    <section id="shop" ref={sectionRef} className={s.catalog}>
      <h2 className={s.title}>Микрозелень от нас</h2>
      <p className={s.description}>
        Откройте для себя свежесобранную микрозелень — идеальное дополнение к любому блюду.
      </p>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={s.gridContainer}>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
