import { IPerson } from '@services/api-types';
import reducer, { addPerson, clear, removePerson, togglePerson } from '../../../utils/slices/people-slice';
import apiResponse from '../../people.json';

describe('reducers', () => {
  const initialState: Array<IPerson> = [];
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle add person', () => {
    const person: IPerson = {
      ...apiResponse.results[1],
    };
    const newState = reducer(initialState, addPerson(person));
    expect(newState).toEqual([person]);
  });

  it('should handle remove person', () => {
    const person: IPerson = {
      ...apiResponse.results[1],
    };
    const newState = reducer([person], removePerson(person));
    expect(newState).toEqual([]);
  });

  it('should handle toggle existed person', () => {
    const person: IPerson = {
      ...apiResponse.results[3],
    };
    const newState = reducer([person], togglePerson(person));
    expect(newState).toEqual([]);
  });

  it('should handle toggle unexisted person', () => {
    const person: IPerson = {
      ...apiResponse.results[3],
    };
    const newState = reducer([], togglePerson(person));
    expect(newState).toEqual([person]);
  });

  it('should handle clear selected', () => {
    const people: Array<IPerson> = apiResponse.results.map((person, index) => {
      return { ...person, id: `${index}` };
    });
    const newState = reducer(people, clear());
    expect(newState).toEqual([]);
  });
});
