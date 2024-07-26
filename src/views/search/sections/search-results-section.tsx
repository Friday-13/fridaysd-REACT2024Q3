import SearchResults from '@components/search-results/search-results';
import styles from '../search.module.scss';
import { useGetPeopleQuery } from '@services/swapi';
import { Outlet } from 'react-router-dom';

export default function SearchResultsSection(props: {
  query: string;
  page?: number;
  setPageCallback: (value: number) => void;
}) {
  const { data, isLoading } = useGetPeopleQuery({ name: props.query, page: props.page });

  return (
    <section className={styles.resultsWrapper}>
      <SearchResults searchResults={data} isLoading={isLoading} setPageCallback={props.setPageCallback} />
      <Outlet />
    </section>
  );
}
