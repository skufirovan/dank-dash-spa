import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from '@store';
import NotFound from '@pages/not-found/not-found';
import { CatalogPage } from '@pages/catalog-page/catalog-page';
import Root from '@components/root/root';
import AppHeader from '@components/app-header/app-header';
import { checkAuth } from '@slices/user';
import { SignUpPage } from '@pages/sign-up-page/sign-up-page';
import { ProfilePage } from '@pages/profile-page/profile-page';
import { ProtectedRoute } from '@components/protected-route/protected-route';
import { SignInPage } from '@pages/sign-in-page/sign-in-page';
import { CartPage } from '@pages/cart-page/cart-page';

const App = () => {
  const dispatch = useDispatch();
  const isCalledRef = useRef(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken') && !isCalledRef.current) {
      isCalledRef.current = true;
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<CatalogPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <ProtectedRoute onlyUnAuth>
                <SignUpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <ProtectedRoute onlyUnAuth>
                <SignInPage />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
