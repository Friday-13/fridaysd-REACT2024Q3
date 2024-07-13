import { useEffect, useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import SearchResults from '../../components/search-results/search-results';
import { getPeople, person } from '../../services/api';
import useLocalStorage from '../../hooks/use-local-storage';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchResults, setSearchResults] = useState<Array<person>>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery, saveQuery] = useLocalStorage('query');
  const setSearchParams = useSearchParams()[1];

  if (hasError) {
    throw new Error('The Emperor Will Show You The True Nature Of The Force...');
  }

  async function applySearchQuery() {
    setIsLoading(true);
    saveQuery(query);
    const response = await getPeople(query, 1);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSearchResults(response.results);
    setSearchParams(response.currentUrl.searchParams);
  }

  useEffect(() => {
    applySearchQuery();
  }, []);

  const inputChanged = (newValue: string) => {
    setQuery(newValue);
  };

  return (
    <>
      <h1> Star Wars Characters </h1>
      <section>
        <SearchInput
          label={{ content: 'Input' }}
          input={{ name: 'search-string', initialValue: query }}
          button={{
            content: 'Search',
          }}
          searchCallback={applySearchQuery}
          inputChangeCallback={inputChanged}
        ></SearchInput>
      </section>
      <section>
        <SearchResults searchResults={searchResults} isLoading={isLoading} />
      </section>
      <button
        onClick={() => {
          setHasError(true);
        }}
      >
        Throw Error
      </button>
    </>
  );
}
