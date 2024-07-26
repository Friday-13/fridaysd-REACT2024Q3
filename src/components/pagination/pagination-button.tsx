import styles from './pagination.module.scss';

type TPaginationButton = {
  isCurrent: boolean;
  value: number;
  setPageCallback: (value: number) => void;
};

function PaginationButton(props: TPaginationButton) {
  return (
    <div
      className={styles.paginationButton}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.setPageCallback(props.value);
      }}
    >
      {props.value}
    </div>
  );
}

export default PaginationButton;
