import SearchResults from '@components/search-results/search-results';
import styles from '../search.module.scss';
import { Outlet } from 'react-router-dom';
import { getPeople, TPeopleReponse } from '@services/api';
import { useEffect, useState } from 'react';

export default function SearchResultsSection(props: { query: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<TPeopleReponse | undefined>(undefined);
  // const [pageNumber, setpageNumber] = useState(1);

  async function applySearchQuery(newQuery?: string, page?: number) {
    console.log(newQuery);
    setIsLoading(true);
    const response = await getPeople(newQuery, page);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSearchResults(response);
  }

  useEffect(() => {
    applySearchQuery(props.query);
  }, [props.query]);

  return (
    <section className={styles.resultsWrapper}>
      <SearchResults searchResults={searchResults} isLoading={isLoading} />
      <Outlet />
    </section>
  );
}
