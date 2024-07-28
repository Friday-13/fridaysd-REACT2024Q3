import { PropsWithChildren, useContext, useState } from 'react';
import styles from './drop-down-menu.module.scss';
import { getThemedClassName, ThemeContext } from '../../context/theme-context';

interface IDropDownProps extends PropsWithChildren {
  menuTitle?: string;
}

function DropDownMenu(props: IDropDownProps) {
  const [isCollapased, setIsCollapsed] = useState<boolean>(true);
  const theme = useContext(ThemeContext);

  function menuClickHandler(event: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    event.stopPropagation();
    setIsCollapsed(!isCollapased);
  }

  return (
    <ul onClick={menuClickHandler} className={getThemedClassName(theme, [styles.dropDownMenu])}>
      {props.menuTitle}
      {isCollapased ? <></> : props.children}
    </ul>
  );
}

export default DropDownMenu;
