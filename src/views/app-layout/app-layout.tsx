import { PropsWithChildren, useContext } from 'react';
import { Provider } from 'react-redux';
import styles from '../../App.module.scss';
import { getThemedClassName, ThemeContext, ThemeProvider } from '@context/theme-context';
import { store } from '../../store';
import Search from '@views/search/search';

function AppLayout(props: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <div id={'root'} className={getThemedClassName(theme, [styles['page-wrapper']])}>
        <Provider store={store}>
          <Search>{props.children}</Search>
        </Provider>
      </div>
    </ThemeProvider>
  );
}

export default AppLayout;
