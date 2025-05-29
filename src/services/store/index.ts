import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

import { activeSectionReducer } from '@slices/active-section';
import { userReducer } from '@slices/user';
import { authFormReducer } from '@services/slices/auth-form';
import { cartReducer } from '@services/slices/cart';
import { orderFormReducer } from '@services/slices/order-form';
import { orderReducer } from '@services/slices/order';
import { productsReducer } from '../slices/products';

const rootReducer = combineReducers({
  products: productsReducer,
  activeSection: activeSectionReducer,
  user: userReducer,
  authForm: authFormReducer,
  orderForm: orderFormReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
