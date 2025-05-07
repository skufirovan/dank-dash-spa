import ProductList from '@components/product-list/product-list';
import * as s from './catalog-page.module.css';

export const CatalogPage = () => {
  return (
    <div className={s.catalog}>
      <ProductList />
    </div>
  );
};
