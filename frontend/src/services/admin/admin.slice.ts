import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { initialState } from './admin.constants';

const adminSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { email, token },
      }: PayloadAction<{ email: string; token: string }>
    ) => {
      state.admin = { email, token };
      state.isAuthenticated = true;
    },
    removeCredentials: (state) => {
      state.admin = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, removeCredentials } = adminSlice.actions;

export default adminSlice.reducer;

export const selectCurrentAdmin = (state: RootState) => state.auth.admin;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
