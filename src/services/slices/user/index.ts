import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@store';
import { IUser } from '@models/IUser';
import { AuthResponse } from '@models/auth-response/AuthResponse';
import AuthService from '../../auth-service/auth-service';

const API_URL = process.env.URL;

export type LoginPayload = {
  email: string;
  password: string;
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginPayload, thunkAPI) => {
    try {
      const res = await AuthService.login(email, password);
      localStorage.setItem('accessToken', res.data.accessToken);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const registration = createAsyncThunk(
  'auth/registration',
  async ({ email, password }: LoginPayload, thunkAPI) => {
    try {
      const res = await AuthService.registration(email, password);
      localStorage.setItem('accessToken', res.data.accessToken);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AuthService.logout();
    localStorage.removeItem('accessToken');
    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const checkAuth = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
    localStorage.setItem('accessToken', res.data.accessToken);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

type TUserState = {
  user: IUser | null;
  isAuth: boolean;
  isSending: boolean;
  isReceiving: boolean;
};

const initialState: TUserState = {
  user: null,
  isAuth: false,
  isSending: false,
  isReceiving: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setSending: (state, action: PayloadAction<boolean>) => {
      state.isSending = action.payload;
    },
    setReceiving: (state, action: PayloadAction<boolean>) => {
      state.isReceiving = action.payload;
    },
  },
  selectors: {
    userSelector: (state) => state.user,
    isAuthSelector: (state) => state.isAuth,
    isSendingSelector: (state) => state.isSending,
    isReceivingSelector: (state) => state.isReceiving,
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isReceiving = false;
        state.isAuth = false;
      })

      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.isReceiving = false;
        state.isAuth = true;
      })

      .addMatcher(isAnyOf(logout.pending, checkAuth.pending), (state) => {
        state.isReceiving = true;
      })
      .addMatcher(isAnyOf(logout.rejected, checkAuth.rejected), (state) => {
        state.isReceiving = false;
        state.isAuth = false;
      })

      .addMatcher(isAnyOf(login.pending, registration.pending), (state) => {
        state.isSending = true;
      })
      .addMatcher(isAnyOf(login.rejected, registration.rejected), (state) => {
        state.isSending = false;
        state.isAuth = false;
      })
      .addMatcher(
        isAnyOf(login.fulfilled, registration.fulfilled),
        (state, action: PayloadAction<AuthResponse>) => {
          state.user = action.payload.user;
          state.isSending = false;
          state.isAuth = true;
        },
      );
  },
});

export const selectUserState = (state: RootState) => state.user;
export const { setAuth, setSending, setReceiving, setUser } = slice.actions;
export const userReducer = slice.reducer;
export const { userSelector, isAuthSelector, isSendingSelector, isReceivingSelector } =
  slice.selectors;
