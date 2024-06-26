import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
