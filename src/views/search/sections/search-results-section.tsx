import SearchResults, { SearchResultsProps } from '@components/search-results/search-results';
import styles from '../search.module.scss';
import { Outlet } from 'react-router-dom';

export default function SearchResultsSection(props: SearchResultsProps) {
  return (
    <section className={styles.resultsWrapper}>
      <SearchResults searchResults={props.searchResults} isLoading={props.isLoading} />
      <Outlet />
    </section>
  );
}
