import { Route, Routes } from 'react-router-dom';
import Root from '@components/root/root';
import NotFound from '@pages/not-found/not-found';
import { useEffect } from 'react';
import { useDispatch } from '@store';
import { fetchProducts } from '@slices/products/index';
import { CatalogPage } from '@pages/catalog-page/catalog-page';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducts());
    }, 2000);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<CatalogPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
