import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import modalSlice from './slices/modalSlice';
import formSlice from './slices/formSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    searchSlice,
    modalSlice,
    formSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
