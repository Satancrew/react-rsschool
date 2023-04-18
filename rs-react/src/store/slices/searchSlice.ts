import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    term: localStorage.getItem('value' || '') || '',
    search: localStorage.getItem('value' || '') || '',
    isLoading: false,
  },
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setTerm, setIsLoading, setSearch } = searchSlice.actions;
export default searchSlice.reducer;
