import PaginationButton from '@components/pagination/pagination-button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../store';

describe('pagination button', () => {
  test('rendering', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PaginationButton isCurrent={true} value={123} setPageCallback={() => {}} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/123/i)).toBeInTheDocument();
  });
});
