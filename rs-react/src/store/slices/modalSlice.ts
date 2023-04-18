import { Character } from '@/common/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    character: {} as Character,
    isModalActive: false,
  },
  reducers: {
    setCharacter(state, action: PayloadAction<Character>) {
      state.character = action.payload;
    },
    setIsModalActive(state, action: PayloadAction<boolean>) {
      state.isModalActive = action.payload;
    },
  },
});

export const { setCharacter, setIsModalActive } = modalSlice.actions;
export default modalSlice.reducer;
