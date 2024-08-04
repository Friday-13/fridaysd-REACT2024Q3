import styles from './pagination.module.scss';
import PaginationButton from './pagination-button';
import { useRouter } from 'next/router';

interface IPagination {
  nextPage?: number;
  prevPage?: number;
  totalPages?: number;
  setPageCallback: (value: number) => void;
}

function Pagination(props: IPagination) {
  const router = useRouter();
  const currentPage = Number(router.query['page']) || 1;

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
