import SearchResults from '@components/search-results/search-results';
import styles from '../search.module.scss';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getPeople, TPeopleReponse } from '@services/api';
import { useEffect, useState } from 'react';
import getPageNumber from '../../../utils/parse-url/get-page-number';

export default function SearchResultsSection(props: { query: string; page?: number }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<TPeopleReponse | undefined>(undefined);
  const searchParams = useSearchParams()[0];
  const [page, setPage] = useState<number | undefined>(props.page);

  async function applySearchQuery(newQuery?: string, page?: number) {
    setIsLoading(true);
    const response = await getPeople(newQuery, page);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSearchResults(response);
  }

  useEffect(() => {
    applySearchQuery(props.query, page);
  }, [props.query, page]);

  useEffect(() => {
    const pageUrl = getPageNumber(searchParams);
    if (pageUrl) {
      setPage(pageUrl);
    } else {
      setPage(1);
    }
  }, [searchParams]);

  return (
    <section className={styles.resultsWrapper}>
      <SearchResults searchResults={searchResults} isLoading={isLoading} />
      <Outlet />
    </section>
  );
}
