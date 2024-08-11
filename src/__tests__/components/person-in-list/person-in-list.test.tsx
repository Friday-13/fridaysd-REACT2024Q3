import '@testing-library/jest-dom';
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

  // test('add to store', async () => {
  //   mockRouter.push('/');
  //   const store = mockStore({
  //     isPeopleLoading: { value: true },
  //     people: { people: apiResponse.results.slice(2, 5) },
  //   });
  //   render(
  //     <Provider store={store}>
  //       <PersonInList person={apiResponse.results[0]} />
  //     </Provider>
  //   );
  //
  //   expect(screen.queryByText(/Luke Skywalker/i)).toBeInTheDocument();
  //
  //   const personInList = screen.getByText('name: Luke Skywalker');
  //   fireEvent.click(personInList);
  //   await waitFor(() => {
  //     expect(mockRouter.asPath).toEqual('/1');
  //   });
  // });
});
