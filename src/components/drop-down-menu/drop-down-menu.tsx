import { PropsWithChildren, useState } from 'react';
import styles from './drop-down-menu.module.scss';

interface IDropDownProps extends PropsWithChildren {
  menuTitle?: string;
}

function DropDownMenu(props: IDropDownProps) {
  const [isCollapased, setIsCollapsed] = useState<boolean>(true);

  function menuClickHandler(event: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    event.stopPropagation();
    setIsCollapsed(!isCollapased);
  }

  return (
    <ul onClick={menuClickHandler} className={styles.dropDownMenu}>
      {props.menuTitle}
      {isCollapased ? <></> : props.children}
    </ul>
  );
}

export default DropDownMenu;
