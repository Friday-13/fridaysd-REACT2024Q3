import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: boolean } = {
  value: true,
};

export const isLoadingSlice = createSlice({
  name: 'isPeopleLoading',
  initialState,
  reducers: {
    setIsPeopleLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsPeopleLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
