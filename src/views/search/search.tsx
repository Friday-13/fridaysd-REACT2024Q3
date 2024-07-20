import { FormEvent, useEffect } from 'react';
import SearchInput from '../../components/search-input/search-input';
import useLocalStorage from '../../hooks/use-local-storage';
import { useSearchParams } from 'react-router-dom';
import SearchResultsSection from './sections/search-results-section';
import ThrowErrorSection from './sections/throw-error-section';

export default function Search() {
  const [query, setQuery, saveQuery] = useLocalStorage('query');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQueryURL = searchParams.get('searchQuery') || undefined;
    if (searchParams.toString() === '') {
      setSearchParams(`searchQuery=${query}`);
      return;
    }
    console.log(searchQueryURL);
    console.log(query);
    if (query !== searchQueryURL) {
      console.log(`set: ${searchQueryURL || ''}`);
      setQuery(searchQueryURL || '');
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
      <SearchResultsSection query={query} />
      <ThrowErrorSection />
    </>
  );
}
