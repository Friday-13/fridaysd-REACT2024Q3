import { ComponentProps } from 'react';
import { person } from '../../services/api';
import Loader from '../loader/loader';
import styles from './search-results.module.scss';

interface SearchResultsProps extends ComponentProps<'div'> {
  searchResults: Array<person>;
  isLoading: boolean;
}

export default function SearchResults(props: SearchResultsProps) {
  if (props.isLoading) {
    return <Loader />;
  }
  if (props.searchResults.length === 0) {
    return <h2>Results Empty</h2>;
  }
  return (
    <ul className={styles.searchResults}>
      {props.searchResults.map((result, index) => (
        <li key={index} className={styles.searchResultsResult}>
          <div>Name: {result.name}</div>
          <div>Gender: {result.gender}</div>
          <div>Birth year: {result.birth_year}</div>
          <div>Eye color: {result.eye_color}</div>
        </li>
      ))}
    </ul>
  );
}
