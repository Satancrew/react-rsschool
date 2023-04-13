import { Character } from '@/common/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    term: '',
    isLoading: false,
    charactersList: [] as Character[],
  },
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    setCharactersList(state, action: PayloadAction<Character[]>) {
      state.charactersList = action.payload;
    },
  },
});

export const { setTerm, setCharactersList } = searchSlice.actions;
export default searchSlice.reducer;
