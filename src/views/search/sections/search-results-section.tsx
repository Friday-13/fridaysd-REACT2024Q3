import SearchResults from '@components/search-results/search-results';
import styles from '../search.module.scss';
import { PropsWithChildren } from 'react';

interface ISearchResultsSection extends PropsWithChildren {
  query: string;
  page?: number;
  setPageCallback: (value: number) => void;
}

export default async function SearchResultsSection(props: ISearchResultsSection) {
  return (
    <section className={styles['results-wrapper']}>
      <SearchResults query={props.query} page={props.page} />
      {props.children}
    </section>
  );
}
