import SearchResults from '@components/search-results/search-results';
import { useGetPeopleQuery } from '@services/swapi';
import { setIsPeopleLoading } from '@utils/slices/is-loading-slice';
import { useDispatch } from 'react-redux';
import styles from '../search.module.scss';
import { PropsWithChildren, useEffect } from 'react';
import { setCurrentPageResults } from '@utils/slices/current-page-slice';

interface ISearchResultsSection extends PropsWithChildren {
  query: string;
  page?: number;
  setPageCallback: (value: number) => void;
}

export default function SearchResultsSection(props: ISearchResultsSection) {
  const { data, isLoading, isFetching } = useGetPeopleQuery({ name: props.query, page: props.page });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsPeopleLoading(isLoading || isFetching));
    if (!(isLoading || isFetching)) {
      dispatch(setCurrentPageResults(data.results));
    }
  }, [isLoading, isFetching]);

  return (
    <section className={styles['results-wrapper']}>
      <SearchResults searchResults={data} setPageCallback={props.setPageCallback} />
      {props.children}
    </section>
  );
}
