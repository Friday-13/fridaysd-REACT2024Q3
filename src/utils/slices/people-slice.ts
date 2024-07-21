import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerson } from '@services/api';
import { RootState } from '../../store';

const initialState = Array<IPerson>;

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IPerson>) => {
      state.push(action.payload);
    },
    // removePerson: (state, action: PayloadAction<IPerson>) => {
    //   state.delete(action.payload);
    // },
    // clear: (state) => {
    //   state.clear();
    // },
  },
});

// export const { addPerson, removePerson, clear } = peopleSlice.actions;
export const { addPerson } = peopleSlice.actions;

export const selectPeople = (state: RootState) => state.people;

export default peopleSlice.reducer;
