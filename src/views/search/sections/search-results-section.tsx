import SearchResults from '@components/search-results/search-results';
import { useGetPeopleQuery } from '@services/swapi';
import { Outlet } from 'react-router-dom';
import { setIsPeopleLoading } from '@utils/slices/is-loading-slice';
import { useDispatch } from 'react-redux';
import styles from '../search.module.scss';
import { useEffect } from 'react';
import { setCurrentPageResults } from '@utils/slices/current-page-slice';

export default function SearchResultsSection(props: {
  query: string;
  page?: number;
  setPageCallback: (value: number) => void;
}) {
  const { data, isLoading, isFetching } = useGetPeopleQuery({ name: props.query, page: props.page });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsPeopleLoading(isLoading || isFetching));
    if (!(isLoading || isFetching)) {
      dispatch(setCurrentPageResults(data.results));
    }
  }, [isLoading, isFetching]);

  return (
    <section className={styles.resultsWrapper}>
      <SearchResults searchResults={data} setPageCallback={props.setPageCallback} />
      <Outlet />
    </section>
  );
}
