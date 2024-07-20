import { ComponentProps } from 'react';
import { TPeopleReponse } from '../../services/api';
import Loader from '../loader/loader';
import styles from './search-results.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '../pagination/pagination';

export interface SearchResultsProps extends ComponentProps<'div'> {
  searchResults?: TPeopleReponse;
  isLoading: boolean;
}

function getPage(url: string | null) {
  if (url) {
    const page = new URL(url).searchParams.get('page');
    if (page) {
      return Number(page);
    }
  }
  return;
}

function getTotalPages(response: TPeopleReponse) {
  const nextPage = getPage(response.next);
  if (nextPage === undefined) {
    const prevPage = getPage(response.previous);
    if (prevPage !== undefined) {
      return prevPage + 1;
    } else {
      return 1;
    }
  }
  return Math.ceil(response.count / response.results.length);
}

export default function SearchResults(props: SearchResultsProps) {
  const navigate = useNavigate();
  const params = useParams();

  if (props.isLoading) {
    return <Loader />;
  }

  if (!props.searchResults || props.searchResults.results.length === 0) {
    return <h2>Results Empty</h2>;
  }

  const nextPage = getPage(props.searchResults.next);
  const prevPage = getPage(props.searchResults.previous);
  const totalPages = getTotalPages(props.searchResults);

  function sectionClick() {
    if (params['personId'] !== undefined) {
      navigate('/');
    }
  }
  return (
    <div className={styles.searchResults} onClick={sectionClick}>
      <h2>Search results</h2>
      <ul className={styles.searchResultsList}>
        {props.searchResults.results.map((result, index) => (
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
      <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} />
    </div>
  );
}
