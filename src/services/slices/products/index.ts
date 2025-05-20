import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { TProduct } from '@models/IProduct';
import { getProductsApi } from '@services/catalog-service/catalog-service';

type TProductsState = {
  data: TProduct[];
  isLoading: boolean;
  error: null | SerializedError;
};

const initialState: TProductsState = {
  data: [],
  isLoading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => getProductsApi());

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const selectProductsState = (state: RootState) => state.products;

export const productsReducer = slice.reducer;
