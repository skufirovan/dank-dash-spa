import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { IProduct } from '@models/IProduct';

export interface ICartProduct extends IProduct {
  quantity: number;
}

type TCartState = {
  products: ICartProduct[];
  price: number;
  quantity: number;
};

const initialState: TCartState = {
  products: [],
  price: 0,
  quantity: 0,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.products.push(newProduct);
      }

      state.price += action.payload.price;
      state.quantity += 1;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          state.products = state.products.filter((item) => item.id !== existingProduct.id);
        }

        state.price -= action.payload.price;
        state.quantity -= 1;
      }
    },
  },
  selectors: {
    productsSelector: (state) => state.products,
    priceSelector: (state) => state.price,
    quantitySelector: (state) => state.quantity,
  },
});

export const selectQuantityById = (id: string) => (state: RootState) =>
  state.cart.products.find((item) => item.id === id)?.quantity ?? 0;

export const { productsSelector, priceSelector, quantitySelector } = slice.selectors;
export const { addToCart, removeFromCart } = slice.actions;
export const cartReducer = slice.reducer;
