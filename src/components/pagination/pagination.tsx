import styles from './pagination.module.scss';
import PaginationButton from './pagination-button';
import { useSearchParams } from 'next/navigation';

interface IPagination {
  nextPage?: number;
  prevPage?: number;
  totalPages?: number;
  setPageCallback: (value: number) => void;
}

function Pagination(props: IPagination) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <div className={styles.pagination}>
      {props.prevPage && (
        <PaginationButton isCurrent={false} value={currentPage - 1} setPageCallback={props.setPageCallback} />
      )}
      {currentPage && <PaginationButton isCurrent={true} value={currentPage} setPageCallback={props.setPageCallback} />}
      {props.nextPage && (
        <PaginationButton isCurrent={false} value={currentPage + 1} setPageCallback={props.setPageCallback} />
      )}
    </div>
  );
}

export default Pagination;
