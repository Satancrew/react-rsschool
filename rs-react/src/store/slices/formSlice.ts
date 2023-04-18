import { IProduct } from '@/common/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    products: [] as IProduct[],
  },
  reducers: {
    setProducts(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts } = formSlice.actions;
export default formSlice.reducer;
