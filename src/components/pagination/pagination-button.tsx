import { useSearchParams } from 'react-router-dom';
import styles from './pagination.module.scss';

type TPaginationButton = {
  isCurrent: boolean;
  value: string;
};

function PaginationButton(props: TPaginationButton) {
  const setSearchParams = useSearchParams()[1];
  return (
    <div
      className={styles.paginationButton}
      onClick={() => {
        setSearchParams(`page=${props.value}`);
      }}
    >
      {props.value}
    </div>
  );
}

export default PaginationButton;
