import SearchResults from '@components/search-results/search-results';
import styles from '../search.module.scss';
import { PropsWithChildren } from 'react';
import { TPeopleReponse } from '@services/api-types';

interface ISearchResultsSection extends PropsWithChildren {
  response: TPeopleReponse;
}

export default function SearchResultsSection(props: ISearchResultsSection) {
  return (
    <section className={styles['results-wrapper']}>
      <SearchResults response={props.response} />
      {props.children}
    </section>
  );
}
