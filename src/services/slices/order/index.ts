import { IOrder } from '@models/IOrder';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import OrderService from '@services/order-service/order-service';

export type OrderPayload = {
  orderAmount: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  deliveryDate: string;
  paymentMethod: 'CASH' | 'CARD';
  orderComposition: string;
};

export const order = createAsyncThunk(
  'order/makeOrder',
  async (
    {
      orderAmount,
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      deliveryDate,
      paymentMethod,
      orderComposition,
    }: OrderPayload,
    thunkAPI,
  ) => {
    try {
      const res = await OrderService.order(
        orderAmount,
        customerName,
        customerPhone,
        customerEmail,
        customerAddress,
        deliveryDate,
        paymentMethod,
        orderComposition,
      );

      return res.data.order;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

type TOrderState = {
  orders: IOrder[] | null;
  isSending: boolean;
};

const initialState: TOrderState = {
  orders: [],
  isSending: false,
};

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setSending: (state, action: PayloadAction<boolean>) => {
      state.isSending = action.payload;
    },
  },
  selectors: {
    ordersSelector: (state) => state.orders,
    isSendingSelector: (state) => state.isSending,
  },
  extraReducers: (builder) => {
    builder
      .addCase(order.pending, (state) => {
        state.isSending = true;
      })
      .addCase(order.fulfilled, (state, action: PayloadAction<IOrder>) => {
        state.orders?.push(action.payload);
        state.isSending = false;
      })
      .addCase(order.rejected, (state) => {
        state.isSending = false;
      });
  },
});

export const { ordersSelector, isSendingSelector } = slice.selectors;
export const { setSending } = slice.actions;
export const orderReducer = slice.reducer;
