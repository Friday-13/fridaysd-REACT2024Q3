import PaginationButton from '@components/pagination/pagination-button';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../store';

test('pagination button rendering', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <PaginationButton isCurrent={true} value={'2'} />
      </Provider>
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
