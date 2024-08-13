import { PropsWithChildren } from 'react';
import styles from './search-results.module.scss';
import PeopleList from '@components/people-list/people-list';
import SearchResultsFrame from '@views/search/sections/search-results-frame';

export interface SearchResultsProps extends PropsWithChildren {
  query: string;
  page?: number;
}

export default function SearchResults(props: SearchResultsProps) {
  return (
    <SearchResultsFrame>
      <div className={[styles['search-results'], styles['results-frame']].join(' ')}>
        <h2>Search results</h2>
        <PeopleList query={props.query} page={props.page} />
      </div>
    </SearchResultsFrame>
  );
}
