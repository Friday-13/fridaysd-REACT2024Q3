import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Pagination from '@components/pagination/pagination';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store';

test('Renders the search page', async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Pagination />
      </Provider>
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
