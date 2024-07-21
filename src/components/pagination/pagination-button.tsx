import { useSearchParams } from 'react-router-dom';
import styles from './pagination.module.scss';

type TPaginationButton = {
  isCurrent: boolean;
  value: string;
};

function PaginationButton(props: TPaginationButton) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      className={styles.paginationButton}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const newParams = searchParams;
        newParams.set('page', props.value);
        setSearchParams(newParams.toString());
      }}
    >
      {props.value}
    </div>
  );
}

export default PaginationButton;
