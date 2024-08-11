import '@testing-library/jest-dom';
import { togglePerson } from '../../../utils/slices/people-slice';
import { fireEvent, render, screen } from '@testing-library/react';
import PersonInList from '@components/person-in-list/person-in-list';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import apiResponse from '../../people.json';
import { pushMock, useRouterMocked } from '../../../test/__mocks__/nextNavigationMock';

const mockStore = configureStore([]);
jest.mock('next/navigation', () => ({
  useRouter: () => useRouterMocked(),
  useSearchParams: jest.fn().mockReturnValue('page=3'),
}));

describe('Person in list', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

    expect(pushMock).toHaveBeenCalledWith('/1?page=3');
  });

  test('add to store', async () => {
    const person = apiResponse.results[0];
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
