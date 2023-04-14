import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
  reducer: {
    searchSlice,
    modalSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
