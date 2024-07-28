import { useContext } from 'react';
import { getThemedClassName, ThemeContext } from '../../context/theme-context';
import styles from './pagination.module.scss';

type TPaginationButton = {
  isCurrent: boolean;
  value: number;
  setPageCallback: (value: number) => void;
};

function PaginationButton(props: TPaginationButton) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={getThemedClassName(theme, [styles.paginationButton])}
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
