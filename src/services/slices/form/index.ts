import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFieldType } from '@utils/types';
import { LoginPayload } from '@slices/user';

type TRegistrationFormState = {
  form: LoginPayload;
  error: string | null;
};

const initialState: TRegistrationFormState = {
  form: {
    email: '',
    password: '',
  },
  error: null,
};

const slice = createSlice({
  name: 'registrationForm',
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

export const { reducer } = slice;
export const { setFormValue } = slice.actions;
export const registrationFormReducer = slice.reducer;
export const { sendErrorSelector, formSelector } = slice.selectors;
