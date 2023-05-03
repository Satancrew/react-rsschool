import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import modalSlice from './slices/modalSlice';
import formSlice from './slices/formSlice';
import { apiSlice } from './slices/apiSlice';

const rootReducer = combineReducers({
  searchSlice,
  modalSlice,
  formSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
