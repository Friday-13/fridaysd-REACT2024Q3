import { IPerson } from '@services/api-types';
import reducer, {
  addPerson,
  clear,
  removePerson,
  togglePerson,
  TSelectedPeopleState,
} from '../../../utils/slices/people-slice';
import apiResponse from '../../people.json';

function getPerson(id: number) {
  const person: IPerson = {
    ...apiResponse.results[id],
  };
  return person;
}

function createState(peopleIds: Array<number>): TSelectedPeopleState {
  const people: Array<IPerson> = peopleIds.map((id) => getPerson(id));
  return { people };
}

describe('reducers', () => {
  const initialState: TSelectedPeopleState = {
    people: [],
  };
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle add person', () => {
    const person: IPerson = {
      ...apiResponse.results[1],
    };
    const newState = reducer(initialState, addPerson(person));
    expect(newState.people).toEqual([person]);
  });

  it('should handle remove person', () => {
    const state = createState([3]);
    const newState = reducer(createState([3]), removePerson(state.people[0]));
    expect(newState.people).toEqual([]);
  });

  it('should handle toggle existed person', () => {
    const state = createState([3]);
    const newState = reducer(createState([3]), togglePerson(state.people[0]));
    expect(newState.people).toEqual([]);
  });

  it('should handle toggle unexisted person', () => {
    const state = createState([]);
    const person = getPerson(3);
    const newState = reducer(state, togglePerson(person));
    expect(newState.people).toEqual([person]);
  });

  it('should handle clear selected', () => {
    const state = createState([1, 2, 3, 4, 5]);
    const newState = reducer(state, clear());
    expect(newState.people).toEqual([]);
  });
});
