import SearchResults from '@components/search-results/search-results';
import { useGetPeopleQuery } from '@services/swapi';
import { Outlet } from 'react-router-dom';
import { setIsPeopleLoading } from '@utils/slices/is-loading-slice';
import { useDispatch } from 'react-redux';
import styles from '../search.module.scss';
import { useEffect } from 'react';

export default function SearchResultsSection(props: {
  query: string;
  page?: number;
  setPageCallback: (value: number) => void;
}) {
  const { data, isLoading, isFetching } = useGetPeopleQuery({ name: props.query, page: props.page });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsPeopleLoading(isLoading || isFetching));
  }, [isLoading, isFetching]);

  return (
    <section className={styles.resultsWrapper}>
      <SearchResults searchResults={data} setPageCallback={props.setPageCallback} />
      <Outlet />
    </section>
  );
}
