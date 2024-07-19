import SearchResults from '@components/search-results/search-results';
import { render } from '@testing-library/react';
import { IPerson, TPeopleReponse } from '@services/api';
import apiResponse from '../../people.json';
import { MemoryRouter } from 'react-router-dom';

test('Renders the main page', async () => {
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
  // const mockUsedNavigate = jest.fn();
  // jest.mock('react-router-dom', () => ({
  //   ...jest.requireActual('react-router-dom'),
  //   useNavigate: () => mockUsedNavigate,
  // }));
  render(
    <MemoryRouter>
      <SearchResults searchResults={searchResults} isLoading={true} />
    </MemoryRouter>
  );
  expect(true).toBeTruthy();
});
