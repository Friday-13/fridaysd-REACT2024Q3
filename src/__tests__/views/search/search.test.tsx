import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Search from '../../../views/search/search';
import { mockFetch } from '../../../test/__mocks__/mock-fetch';
import apiResponse from '../../people.json';
import { MemoryRouter } from 'react-router-dom';

test('Renders the search page', async () => {
  window.fetch = mockFetch(apiResponse);
  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
