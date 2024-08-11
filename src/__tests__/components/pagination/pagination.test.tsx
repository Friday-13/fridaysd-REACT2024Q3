import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '@components/pagination/pagination';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { useRouterMocked, useSearchParamsMocked } from '../../../test/__mocks__/nextNavigationMock';
import { useRouter, useSearchParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: () => useRouterMocked(),
  useSearchParams: () => useSearchParamsMocked(),
}));

describe('pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Renders', async () => {
    const mockedSearchparams = useSearchParamsMocked();
    mockedSearchparams.delete('page');
    render(
      <Provider store={store}>
        <Pagination setPageCallback={() => {}} />
      </Provider>
    );
    expect(screen.queryByText(/1/i)).toBeInTheDocument();
  });

  test('Render with pervious and next', async () => {
    const mockedSearchparams = useSearchParamsMocked();
    mockedSearchparams.set('page', '3');
    render(
      <Provider store={store}>
        <Pagination
          prevPage={2}
          nextPage={4}
          setPageCallback={(newValue: number) => {
            const router = useRouter();
            router.push(`/?page=${newValue}`);
          }}
        />
      </Provider>
    );
    expect(screen.queryByText(/2/i)).toBeInTheDocument();
    expect(screen.queryByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
  });
  //
  test('Button click works', async () => {
    const mockedSearchparams = useSearchParamsMocked();
    mockedSearchparams.set('page', '3');
    const mockedRouter = useRouterMocked();

    render(
      <Provider store={store}>
        <Pagination
          prevPage={2}
          nextPage={4}
          setPageCallback={(newValue: number) => {
            mockedRouter.push(`/?page=${newValue}`);
          }}
        />
      </Provider>
    );
    expect(screen.queryByText(/4/i)).toBeInTheDocument();
    const nextButton = screen.getByText('4');
    fireEvent.click(nextButton);
    expect(mockedRouter.push).toHaveBeenCalledWith(`/?page=4`);
  });
});
