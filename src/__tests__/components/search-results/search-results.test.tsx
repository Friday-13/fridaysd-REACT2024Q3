import SearchResults from '@components/search-results/search-results';
import { render, screen } from '@testing-library/react';
import { TPeopleReponse } from '@services/api-types';
import apiResponse from '../../people.json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
jest.mock('next/router', () => jest.requireActual('next-router-mock'));

function getSearchResults(): TPeopleReponse {
  const searchResults: TPeopleReponse = {
    results: apiResponse.results,
    count: apiResponse.count,
    currentUrl: new URL('https://swapi.dev/api/'),
    previous: apiResponse.previous,
    next: apiResponse.next,
  };
  return searchResults;
}

test('Renders the search results component: loading', async () => {
  const searchResults = getSearchResults();
  const store = mockStore({
    isPeopleLoading: { value: true },
    people: { people: [] },
  });
  render(
    <Provider store={store}>
      <SearchResults searchResults={searchResults} setPageCallback={() => {}} />
    </Provider>
  );
  expect(screen.queryByText(/luke/i)).toBeNull();
});

test('Renders the search results component: with content', () => {
  const searchResults = getSearchResults();
  const store = mockStore({
    isPeopleLoading: { value: false },
    people: { people: searchResults.results.slice(0, 5) },
  });
  searchResults.previous = new URL('https://swapi.dev/api/people/?page=2').toString();
  searchResults.next = new URL('https://swapi.dev/api/people/?page=4').toString();
  render(
    <Provider store={store}>
      <SearchResults searchResults={searchResults} setPageCallback={() => {}} />
    </Provider>
  );
  expect(screen.queryByText(/luke/i)).toBeInTheDocument();
});

test('Renders the search results component: last page', async () => {
  const searchResults = getSearchResults();
  const store = mockStore({
    isPeopleLoading: { value: false },
    people: { people: searchResults.results.slice(0, 5) },
  });
  searchResults.previous = new URL('https://swapi.dev/api/people/?page=2').toString();
  searchResults.next = null;
  render(
    <Provider store={store}>
      <SearchResults searchResults={searchResults} setPageCallback={() => {}} />
    </Provider>
  );
  expect(screen.queryByText(/Obi-Wan Kenobi/i)).toBeInTheDocument();
});

test('Renders the search results component: only one page', async () => {
  const searchResults = getSearchResults();
  const store = mockStore({
    isPeopleLoading: { value: false },
    people: { people: searchResults.results.slice(0, 5) },
  });
  searchResults.next = null;
  searchResults.previous = null;
  render(
    <Provider store={store}>
      <SearchResults searchResults={searchResults} setPageCallback={() => {}} />
    </Provider>
  );
  expect(screen.queryByText(/luke/i)).toBeInTheDocument();
});
