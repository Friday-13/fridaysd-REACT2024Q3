import SearchResults from '@components/search-results/search-results';
import { render, screen } from '@testing-library/react';
import { IPerson, TPeopleReponse } from '@services/api';
import apiResponse from '../../people.json';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store';

function getSearchResults(): TPeopleReponse {
  const searchResults: TPeopleReponse = {
    results: apiResponse.results.map((person, id) => {
      const modifiedPerson: IPerson = {
        ...person,
        id: `${id + 1}`,
      };
      return modifiedPerson;
    }),
    count: apiResponse.count,
    currentUrl: new URL('https://swapi.dev/api/'),
    previous: apiResponse.previous,
    next: apiResponse.next,
  };
  return searchResults;
}

test('Renders the search results component: loading', async () => {
  const searchResults = getSearchResults();
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchResults searchResults={searchResults} isLoading={true} />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.queryByText(/luke/i)).toBeNull();
});

test('Renders the search results component: with content', async () => {
  const searchResults = getSearchResults();
  searchResults.previous = new URL('https://swapi.dev/api/people/?page=2').toString();
  searchResults.next = new URL('https://swapi.dev/api/people/?page=4').toString();
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchResults searchResults={searchResults} isLoading={false} />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.queryByText(/luke/i)).toBeInTheDocument();
});

test('Renders the search results component: last page', async () => {
  const searchResults = getSearchResults();
  searchResults.previous = new URL('https://swapi.dev/api/people/?page=2').toString();
  searchResults.next = null;
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchResults searchResults={searchResults} isLoading={false} />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.queryByText(/Obi-Wan Kenobi/i)).toBeInTheDocument();
});

test('Renders the search results component: only one page', async () => {
  const searchResults = getSearchResults();
  searchResults.next = null;
  searchResults.previous = null;
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchResults searchResults={searchResults} isLoading={false} />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.queryByText(/luke/i)).toBeInTheDocument();
});
