import { PropsWithChildren, useContext } from 'react';
import { Provider } from 'react-redux';
import styles from '../../App.module.scss';
import { getThemedClassName, ThemeContext } from '@context/theme-context';
import { store } from '../../store';
import Search from '@views/search/search';

function AppLayout(props: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  return (
    <div id={'root'} className={getThemedClassName(theme, [styles['page-wrapper']])}>
      <Provider store={store}>
        <Search>{props.children}</Search>
      </Provider>
    </div>
  );
}

export default AppLayout;
