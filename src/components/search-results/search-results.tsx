import { ComponentProps } from 'react';
import { IPerson } from '../../services/api';
import Loader from '../loader/loader';
import styles from './search-results.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

interface SearchResultsProps extends ComponentProps<'div'> {
  searchResults: Array<IPerson>;
  isLoading: boolean;
}

export default function SearchResults(props: SearchResultsProps) {
  const navigate = useNavigate();
  const params = useParams();

  if (props.isLoading) {
    return <Loader />;
  }
  if (props.searchResults.length === 0) {
    return <h2>Results Empty</h2>;
  }

  function sectionClick() {
    if (params['personId'] !== undefined) {
      navigate('/');
    }
  }
  return (
    <div className={styles.searchResults} onClick={sectionClick}>
      <h2>Search results</h2>
      <ul className={styles.searchResultsList}>
        {props.searchResults.map((result, index) => (
          <li
            key={index}
            className={styles.searchResultsResult}
            onClick={() => {
              navigate(`/${result.id}`);
            }}
          >
            <div>Name: {result.name}</div>
            <div>Gender: {result.gender}</div>
            <div>Birth year: {result.birth_year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
