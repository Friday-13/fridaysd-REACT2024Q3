import { FormEvent, PropsWithChildren, useContext, useEffect, useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import useLocalStorage from '../../hooks/use-local-storage';
import SearchResultsSection from './sections/search-results-section';
import ThrowErrorSection from './sections/throw-error-section';
import SelectedPeopleManager from '@components/selected-people-manager/selected-people-manager';
import { getThemedClassName, ThemeContext } from '../../context/theme-context';
import { useRouter } from 'next/router';

export default function Search(props: PropsWithChildren) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const router = useRouter();
  // const [page, setPage] = useState<number | undefined>(getPageNumber(router.query));
  const [page, setPage] = useState<number | undefined>(undefined);
  const [query, setQuery, getQuery, saveQuery] = useLocalStorage<string>('query', '');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (!router.isReady) return;
    const searchQueryURL = router.query['search-string'];
    const pageURL = Number(router.query['page']);
    if (searchQueryURL === undefined) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, 'search-string': getQuery() },
        },
        undefined,
        { shallow: true }
      );
      return;
    }
    if (query !== searchQueryURL) {
      setQuery(`${searchQueryURL}` || '');
      setPage(pageURL || 1);
    }
  }, [router.isReady]);

  const searchCallback = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const newQuery = formData.get('search-string') as string;
    saveQuery(newQuery);
    setQuery(newQuery);
    setPage(1);
    if (newQuery !== '') {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, 'search-string': newQuery },
        },
        undefined,
        { shallow: true }
      );
      return;
    }
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, 'search-string': newQuery },
      },
      undefined,
      { shallow: true }
    );
  };

  const setPageCallback = (newValue: number) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newValue },
      },
      undefined,
      { shallow: true }
    );
    setPage(newValue);
  };

  return (
    <>
      <button onClick={theme.toggleTheme} className={getThemedClassName(theme, [])}>
        {theme.theme}
      </button>
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
      <SearchResultsSection query={query} page={page} setPageCallback={setPageCallback}>
        {props.children}
      </SearchResultsSection>
      <section>
        <SelectedPeopleManager />
      </section>
      <ThrowErrorSection />
    </>
  );
}
