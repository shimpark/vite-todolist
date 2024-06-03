// src/app/store.ts
import { configureStore, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  username: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectUsername = (state: { auth: AuthState }) => state.auth.username;

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
