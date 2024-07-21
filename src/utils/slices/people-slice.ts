import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerson } from '@services/api';
import { RootState } from '../../store';
import isIdEqual from '../person/compare-person';

const initialState = Array<IPerson>;

function isDublicate(state: Array<IPerson>, testPerson: IPerson) {
  return state.some((person) => isIdEqual(person, testPerson));
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IPerson>) => {
      if (!isDublicate(state, action.payload)) {
        state.push(action.payload);
      }
      return state;
    },
    removePerson: (state, action: PayloadAction<IPerson>) => {
      if (isDublicate(state, action.payload)) {
        return state.filter((person) => {
          return !isIdEqual(person, action.payload);
        });
      }
      return state;
    },

    togglePerson: (state, action: PayloadAction<IPerson>): Array<IPerson> => {
      if (isDublicate(state, action.payload)) {
        return peopleSlice.caseReducers.removePerson(state, action);
      }
      return peopleSlice.caseReducers.addPerson(state, action);
    },

    clear: () => {
      return [];
    },
  },
});

export const { addPerson, removePerson, togglePerson, clear } = peopleSlice.actions;

export const selectedPeople = (state: RootState) => state.people;

export default peopleSlice.reducer;
