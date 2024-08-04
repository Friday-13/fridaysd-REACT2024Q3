import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '@components/pagination/pagination';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('pagination', () => {
  test('Renders', async () => {
    mockRouter.push('/');
    render(
      <Provider store={store}>
        <Pagination setPageCallback={() => {}} />
      </Provider>
    );
    expect(screen.queryByText(/1/i)).toBeInTheDocument();
  });

  test('Render with pervious and next', async () => {
    mockRouter.push({
      pathname: '',
      query: { page: 3 },
    });
    render(
      <Provider store={store}>
        <Pagination
          prevPage={2}
          nextPage={4}
          setPageCallback={(newValue: number) => {
            mockRouter.push({
              pathname: router.pathname,
              query: { ...mockRouter.query, page: newValue },
            });
          }}
        />
      </Provider>
    );
    expect(screen.queryByText(/2/i)).toBeInTheDocument();
    expect(screen.queryByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
  });

  test('Render with pervious and next', async () => {
    mockRouter.push({
      pathname: '',
      query: { page: 3 },
    });
    render(
      <Provider store={store}>
        <Pagination
          prevPage={2}
          nextPage={4}
          setPageCallback={(newValue: number) => {
            mockRouter.push({
              pathname: mockRouter.pathname,
              query: { ...mockRouter.query, page: newValue },
            });
          }}
        />
      </Provider>
    );
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
    const nextButton = screen.getByText('4');
    fireEvent.click(nextButton);
    expect(mockRouter.asPath).toEqual('/?page=4');
  });
});
