import { FormEvent, useEffect, useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import SearchResults from '../../components/search-results/search-results';
import { getPeople, TPeopleReponse } from '../../services/api';
import useLocalStorage from '../../hooks/use-local-storage';
import { Outlet, useSearchParams } from 'react-router-dom';
import styles from './search.module.scss';

export default function Search() {
  const [searchResults, setSearchResults] = useState<TPeopleReponse | undefined>(undefined);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery, saveQuery] = useLocalStorage('query');
  const [searchParams, setSearchParams] = useSearchParams();

  if (hasError) {
    throw new Error('The Emperor Will Show You The True Nature Of The Force...');
  }

  async function applySearchQuery(newQuery?: string, page?: number) {
    setIsLoading(true);
    const response = await getPeople(newQuery, page);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSearchResults(response);
  }

  useEffect(() => {
    const searchQuery = searchParams.get('search') || undefined;
    const pageNumber = Number(searchParams.get('page')) || undefined;
    if (searchParams.toString() === '') {
      setSearchParams(`search=${query}`);
      return;
    }
    if (query !== searchQuery) {
      setQuery(searchQuery || '');
    }
    applySearchQuery(searchQuery, pageNumber);
  }, [searchParams]);

  const inputChanged = (newValue: string) => {
    setQuery(newValue);
  };

  const searchCallback = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const query = formData.get('search-string') as string;
    saveQuery(query);
    if (query !== '') {
      setSearchParams(`search=${query}`);
      return;
    }
    setSearchParams();
  };

  return (
    <>
      <h1> Star Wars Characters </h1>
      <section>
        <SearchInput
          labelContent={'Input'}
          inputName={'search-string'}
          inputInitialValue={query}
          buttonContent={'Search'}
          searchCallback={searchCallback}
          inputChangeCallback={inputChanged}
        ></SearchInput>
      </section>
      <section className={styles.resultsWrapper}>
        <SearchResults searchResults={searchResults} isLoading={isLoading} />
        <Outlet></Outlet>
      </section>
      <section>
        <button
          onClick={() => {
            setHasError(true);
          }}
        >
          Throw Error
        </button>
      </section>
    </>
  );
}
