import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerson } from '@services/api-types';

type TCurrentPageState = {
  people: Array<IPerson>;
};

const initialState: TCurrentPageState = {
  people: [],
};

export const currentPageSlice = createSlice({
  name: 'currentPageItems',
  initialState,
  reducers: {
    setCurrentPageResults: (state, action: PayloadAction<Array<IPerson>>) => {
      state.people = action.payload;
    },
  },
});

export const { setCurrentPageResults } = currentPageSlice.actions;
export default currentPageSlice.reducer;
