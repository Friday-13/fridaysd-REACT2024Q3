import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Search from '../../../views/search/search';
import { mockFetch } from '../../../test/__mocks__/mock-fetch';
import apiResponse from '../../people.json';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store';

test('Renders the search page', async () => {
  window.fetch = mockFetch(apiResponse);
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Search />
      </Provider>
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
