import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PersonInList from '@components/person-in-list/person-in-list';
import { Provider } from 'react-redux';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import apiResponse from '../../people.json';

function createTestRouter(element: React.ReactNode, path: string, initialEntries: Array<string>) {
  const router = createMemoryRouter(
    [
      {
        path,
        element,
      },
    ],
    {
      initialEntries,
      initialIndex: 0,
    }
  );

  return router;
}

const mockStore = configureStore([]);
describe('Person in list', () => {
  test('Renders', async () => {
    const store = mockStore({
      isPeopleLoading: { value: true },
      people: { people: apiResponse.results.slice(2, 5) },
    });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PersonInList person={apiResponse.results[0]} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/luke/i)).toBeInTheDocument();
  });

  test('add to store', async () => {
    const router = createTestRouter(<PersonInList person={apiResponse.results[0]} />, '/', ['']);
    const store = mockStore({
      isPeopleLoading: { value: true },
      people: { people: apiResponse.results.slice(2, 5) },
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    expect(screen.queryByText(/Luke Skywalker/i)).toBeInTheDocument();

    const personInList = screen.getByText('name: Luke Skywalker');
    fireEvent.click(personInList);
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/person/1');
    });
  });
});
