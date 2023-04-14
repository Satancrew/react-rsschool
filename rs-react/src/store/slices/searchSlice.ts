import { Character } from '@/common/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    term: localStorage.getItem('value' || ''),
    apiLink:
      `https://rickandmortyapi.com/api/character` + `/?name=${localStorage.getItem('value')}`,
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
    setApiLink(state, action: PayloadAction<string>) {
      state.apiLink = action.payload;
    },
  },
});

export const { setTerm, setCharactersList, setApiLink } = searchSlice.actions;
export default searchSlice.reducer;
