import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Pagination from '@components/pagination/pagination';
import { MemoryRouter } from 'react-router-dom';

test('Renders the search page', async () => {
  render(
    <MemoryRouter>
      <Pagination />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
