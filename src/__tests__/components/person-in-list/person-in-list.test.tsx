import '@testing-library/jest-dom';
import { togglePerson } from '../../../utils/slices/people-slice';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PersonInList from '@components/person-in-list/person-in-list';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import apiResponse from '../../people.json';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
const mockStore = configureStore([]);

describe('Person in list', () => {
  test('Renders', async () => {
    const store = mockStore({
      isPeopleLoading: { value: true },
      people: { people: apiResponse.results.slice(2, 5) },
    });
    render(
      <Provider store={store}>
        <PersonInList person={apiResponse.results[0]} />
      </Provider>
    );
    expect(screen.queryByText(/luke/i)).toBeInTheDocument();
  });

  test('open person page', async () => {
    mockRouter.push('/');
    const store = mockStore({
      isPeopleLoading: { value: true },
      people: { people: apiResponse.results.slice(2, 5) },
    });
    render(
      <Provider store={store}>
        <PersonInList person={apiResponse.results[0]} />
      </Provider>
    );

    expect(screen.queryByText(/Luke Skywalker/i)).toBeInTheDocument();

    const personInList = screen.getByText('name: Luke Skywalker');
    fireEvent.click(personInList);
    await waitFor(() => {
      expect(mockRouter.asPath).toEqual('/1');
    });
  });

  test('add to store', async () => {
    const person = apiResponse.results[0];
    mockRouter.push('/');
    const testPeople = apiResponse.results.slice(2, 5);
    const store = mockStore({
      isPeopleLoading: { value: true },
      people: { people: testPeople },
    });
    render(
      <Provider store={store}>
        <PersonInList person={apiResponse.results[0]} />
      </Provider>
    );

    expect(screen.queryByText(/Luke Skywalker/i)).toBeInTheDocument();

    const checkbox = screen.getByLabelText(person.name);
    fireEvent.click(checkbox);
    const actions = store.getActions();
    expect(actions).toContainEqual(togglePerson(person));
  });
});
