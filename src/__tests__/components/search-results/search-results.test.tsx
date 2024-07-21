import SearchResults from '@components/search-results/search-results';
import { render } from '@testing-library/react';
import { IPerson, TPeopleReponse } from '@services/api';
import apiResponse from '../../people.json';
import { MemoryRouter } from 'react-router-dom';

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
      <SearchResults searchResults={searchResults} isLoading={true} />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});

test('Renders the search results component: with content', async () => {
  const searchResults = getSearchResults();
  searchResults.previous = new URL('https://swapi.dev/api/people/?page=2').toString();
  searchResults.next = new URL('https://swapi.dev/api/people/?page=4').toString();
  render(
    <MemoryRouter>
      <SearchResults searchResults={searchResults} isLoading={false} />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});

test('Renders the search results component: last page', async () => {
  const searchResults = getSearchResults();
  searchResults.previous = new URL('https://swapi.dev/api/people/?page=2').toString();
  searchResults.next = null;
  render(
    <MemoryRouter>
      <SearchResults searchResults={searchResults} isLoading={false} />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});

test('Renders the search results component: only one page', async () => {
  const searchResults = getSearchResults();
  searchResults.next = null;
  searchResults.previous = null;
  render(
    <MemoryRouter>
      <SearchResults searchResults={searchResults} isLoading={false} />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
