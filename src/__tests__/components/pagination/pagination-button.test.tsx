import PaginationButton from '@components/pagination/pagination-button';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('pagination button rendering', () => {
  render(
    <MemoryRouter>
      <PaginationButton isCurrent={true} value={'2'} />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
