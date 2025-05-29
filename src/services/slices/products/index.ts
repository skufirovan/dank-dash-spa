import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { IProduct } from '@models/IProduct';
import { CatalogService } from '@services/catalog-service/catalog-service';

export const fetchProducts = createAsyncThunk('products/fetch', async (_, thunkAPI) => {
  try {
    const res = await CatalogService.getProducts();
    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

type TProductsState = {
  data: IProduct[];
  isLoading: boolean;
  error: null | SerializedError;
};

const initialState: TProductsState = {
  data: [],
  isLoading: true,
  error: null,
};

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
