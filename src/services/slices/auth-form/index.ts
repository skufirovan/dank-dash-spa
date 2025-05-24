import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFieldType } from '@utils/types';
import { LoginPayload } from '@slices/user';

type TAuthFormState = {
  form: LoginPayload;
  error: string | null;
};

const initialState: TAuthFormState = {
  form: {
    email: '',
    password: '',
  },
  error: null,
};

const slice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setFormValue: (state, action: PayloadAction<TFieldType<LoginPayload>>) => {
      state.form[action.payload.field] = action.payload.value;
    },
  },
  selectors: {
    sendErrorSelector: (state) => state.error,
    formSelector: (state) => state.form,
  },
});

export const { sendErrorSelector, formSelector } = slice.selectors;
export const { setFormValue } = slice.actions;
export const authFormReducer = slice.reducer;
