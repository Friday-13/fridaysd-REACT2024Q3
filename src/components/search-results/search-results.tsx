import { ComponentProps } from 'react';
import { TPeopleReponse } from '../../services/api';
import Loader from '../loader/loader';
import styles from './search-results.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const location = useLocation();

  if (props.isLoading) {
    return (
      <div className={[styles.searchResults, styles.resultsFrame].join(' ')}>
        <Loader />
      </div>
    );
  }

  if (!props.searchResults || props.searchResults.results.length === 0) {
    return <h2>Results Empty</h2>;
  }

  const nextPage = getPage(props.searchResults.next);
  const prevPage = getPage(props.searchResults.previous);
  const totalPages = getTotalPages(props.searchResults);

  function sectionClick() {
    if (params['id'] !== undefined) {
      navigate(`/${location.search}`);
    }
  }
  return (
    <div
      className={[styles.searchResults, styles.resultsFrame].join(' ')}
      onClick={(e) => {
        e.preventDefault;
        sectionClick();
      }}
    >
      <h2>Search results</h2>
      <ul className={styles.searchResultsList}>
        {props.searchResults.results.map((result, index) => (
          <li
            key={index}
            className={styles.searchResultsResult}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(`/person/${result.id}${location.search}`);
            }}
          >
            <div>name: {result.name}</div>
            <div>Gender: {result.gender}</div>
            <div>Birth year: {result.birth_year}</div>
          </li>
        ))}
      </ul>
      <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} />
    </div>
  );
}
