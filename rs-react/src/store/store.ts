import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import modalSlice from './slices/modalSlice';
import formSlice from './slices/formSlice';

const store = configureStore({
  reducer: {
    searchSlice,
    modalSlice,
    formSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
