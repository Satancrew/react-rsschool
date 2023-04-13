import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    searchSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
