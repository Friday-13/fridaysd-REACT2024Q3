import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerson } from '@services/api-types';
import isUrlEqual from '../person/compare-person';

type TSelectedPeopleState = {
  people: Array<IPerson>;
};

const initialState: TSelectedPeopleState = {
  people: [],
};

export function isPersonInState(state: TSelectedPeopleState, testPerson: IPerson) {
  return state.people.some((person) => isUrlEqual(person, testPerson));
}

const removePersonReducer = (state: TSelectedPeopleState, action: PayloadAction<IPerson>): TSelectedPeopleState => {
  if (isPersonInState(state, action.payload)) {
    const filteredPeople = state.people.filter((person) => {
      return !isUrlEqual(person, action.payload);
    });
    state.people = filteredPeople;
  }
  return state;
};

const addPersonReducer = (state: TSelectedPeopleState, action: PayloadAction<IPerson>) => {
  if (!isPersonInState(state, action.payload)) {
    state.people.push(action.payload);
  }
  return state;
};

const togglePersonReducer = (state: TSelectedPeopleState, action: PayloadAction<IPerson>) => {
  if (isPersonInState(state, action.payload)) {
    return removePersonReducer(state, action);
  }
  return addPersonReducer(state, action);
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson: addPersonReducer,
    removePerson: removePersonReducer,
    togglePerson: togglePersonReducer,
    clear: (state) => {
      state.people = [];
    },
  },
});

export const { addPerson, removePerson, togglePerson, clear } = peopleSlice.actions;
export default peopleSlice.reducer;
