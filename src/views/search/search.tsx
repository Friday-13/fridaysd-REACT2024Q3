import { FormEvent, useEffect, useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import useLocalStorage from '../../hooks/use-local-storage';
import { useSearchParams } from 'react-router-dom';
import SearchResultsSection from './sections/search-results-section';
import ThrowErrorSection from './sections/throw-error-section';
import getPageNumber from '../../utils/parse-url/get-page-number';
import getSearchQuery from '../../utils/parse-url/get-search-query';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number | undefined>(getPageNumber(searchParams));
  const [query, setQuery, saveQuery] = useLocalStorage('query', getSearchQuery(searchParams));

  useEffect(() => {
    const searchQueryURL = getSearchQuery(searchParams);
    const pageURL = getPageNumber(searchParams);
    if (searchParams.toString() === '') {
      setSearchParams(`searchQuery=${query}`);
      return;
    }
    if (query !== searchQueryURL) {
      console.log(`set: ${searchQueryURL || ''}`);
      setQuery(searchQueryURL || '');
      setPage(pageURL);
    }
  }, []);

  const searchCallback = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const newQuery = formData.get('search-string') as string;
    saveQuery(newQuery);
    setQuery(newQuery);
    if (newQuery !== '') {
      setSearchParams(`searchQuery=${newQuery}`);
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
        />
      </section>
      <SearchResultsSection query={query} page={page} />
      <ThrowErrorSection />
    </>
  );
}
