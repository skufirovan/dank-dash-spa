import { useSelector } from '@store';
import { selectProductsState } from '@slices/products';
import Preloader from '@components/ui/preloader/preloader';
import ErrorMessage from '@components/ui/error-message/error-message';
import ProductCard from '@components/product-card/product-card';
import * as s from './product-list.module.css';

const ProductList = () => {
  const { data, isLoading, error } = useSelector(selectProductsState);

  if (isLoading) return <Preloader />;
  if (error) return <ErrorMessage message={error.message ?? 'Неизвестная ошибка'} />;

  return (
    <div className={s.gridContainer}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
