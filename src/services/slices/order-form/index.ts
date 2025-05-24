import { IOrderInfoForm, IUserInfoForm } from '@models/IOrderForm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFieldType } from '@utils/types';

type TOrderFormState = {
  stepOneForm: IUserInfoForm;
  stepTwoForm: IOrderInfoForm;
  error: string | null;
};

const initialState: TOrderFormState = {
  stepOneForm: {
    name: '',
    phone: '',
    email: '',
  },
  stepTwoForm: {
    address: '',
    deliveryDate: '',
    paymentMethod: 'CASH',
  },
  error: null,
};

const slice = createSlice({
  name: 'orderForm',
  initialState,
  reducers: {
    setFisrtFormValue: (state, action: PayloadAction<TFieldType<IUserInfoForm>>) => {
      state.stepOneForm[action.payload.field] = action.payload.value;
    },
    setSecondFormValue: (state, action: PayloadAction<TFieldType<IOrderInfoForm>>) => {
      if (action.payload.field !== 'paymentMethod') {
        state.stepTwoForm[action.payload.field] = action.payload.value;
      } else {
        state.stepTwoForm.paymentMethod = action.payload.value as 'CASH' | 'CARD';
      }
    },
  },
  selectors: {
    errorSelector: (state) => state.error,
    firstFormSelector: (state) => state.stepOneForm,
    secondFormSelector: (state) => state.stepTwoForm,
  },
});

export const { errorSelector, firstFormSelector, secondFormSelector } = slice.selectors;
export const { setFisrtFormValue, setSecondFormValue } = slice.actions;
export const orderFormReducer = slice.reducer;
