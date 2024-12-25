import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  isAuthenticate: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticate: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticate = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticate = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
