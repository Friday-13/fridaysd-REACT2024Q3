import { useSearchParams } from 'react-router-dom';
import styles from './pagination.module.scss';
import PaginationButton from './pagination-button';

interface IPagination {
  nextPage?: number;
  prevPage?: number;
  totalPages?: number;
}

function Pagination(props: IPagination) {
  const searchParams = useSearchParams()[0];
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <div className={styles.pagination}>
      {props.prevPage && <PaginationButton isCurrent={false} value={`${currentPage - 1}`} />}
      {currentPage && <PaginationButton isCurrent={true} value={`${currentPage}`} />}
      {props.nextPage && <PaginationButton isCurrent={false} value={`${currentPage + 1}`} />}
    </div>
  );
}

export default Pagination;
