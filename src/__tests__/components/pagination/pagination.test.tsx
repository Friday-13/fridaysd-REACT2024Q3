import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Pagination from '@components/pagination/pagination';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('pagination', () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <Pagination
            prevPage={2}
            nextPage={4}
            setPageCallback={(newValue) => {
              router.state.location.search = `?page=${newValue}`;
            }}
          />
        ),
      },
    ],
    {
      initialEntries: ['/?page=3'],
      initialIndex: 0,
    }
  );

  test('Renders', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Pagination setPageCallback={() => {}} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/1/i)).toBeInTheDocument();
  });

  test('Render with pervious and next', async () => {
    render(
      <MemoryRouter initialEntries={['/?page=3']}>
        <Provider store={store}>
          <Pagination prevPage={2} nextPage={4} setPageCallback={() => {}} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/2/i)).toBeInTheDocument();
    expect(screen.queryByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
  });

  test('Render with pervious and next', async () => {
    render(
      <MemoryRouter initialEntries={['/?page=3']}>
        <Provider store={store}>
          <Pagination
            prevPage={2}
            nextPage={4}
            setPageCallback={(newValue: number) => {
              window.location.search = `?page=${newValue}`;
            }}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/2/i)).toBeInTheDocument();
    expect(screen.queryByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
  });

  test('Render with pervious and next', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
    const nextButton = screen.getByText('4');
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(router.state.location.search).toEqual('?page=4');
    });
  });
});
