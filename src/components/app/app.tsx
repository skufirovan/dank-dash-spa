import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from '@store';
import { fetchProducts } from '@slices/products/index';
import NotFound from '@pages/not-found/not-found';
import { CatalogPage } from '@pages/catalog-page/catalog-page';
import Root from '@components/root/root';
import AppHeader from '@components/app-header/app-header';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducts());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<CatalogPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
