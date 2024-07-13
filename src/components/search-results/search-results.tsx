import { TPeopleResponse } from '../../services/api';
import Loader from '../loader/loader';
import styles from './search-results.module.scss';
import Pagination from '../pagination/pagination';

interface SearchResultsProps {
  isLoading: boolean;
  searchResults?: TPeopleResponse;
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

function getTotalPages(response: TPeopleResponse) {
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
  if (props.isLoading || !props.searchResults) {
    return <Loader />;
  }
  if (!props.searchResults || props.searchResults.results.length === 0) {
    return <h2>Results Empty</h2>;
  }
  const nextPage = getPage(props.searchResults.next);
  const prevPage = getPage(props.searchResults.previous);
  const currentPage = getPage(props.searchResults.currentUrl.toString());
  const totalPages = getTotalPages(props.searchResults);

  return (
    <div>
      <ul className={styles.searchResults}>
        {props.searchResults.results.map((result, index) => (
          <li key={index} className={styles.searchResultsResult}>
            <div>Name: {result.name}</div>
            <div>Gender: {result.gender}</div>
            <div>Birth year: {result.birth_year}</div>
            <div>Eye color: {result.eye_color}</div>
          </li>
        ))}
      </ul>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        totalPages={totalPages}
        currentPage={currentPage}
        currentUrl={props.searchResults.currentUrl}
      />
    </div>
  );
}
