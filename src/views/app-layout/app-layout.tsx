import { PropsWithChildren, useContext } from 'react';
import { Provider } from 'react-redux';
import styles from '../../App.module.scss';
import { getThemedClassName, ThemeContext } from '@context/theme-context';
import { store } from '../../store';

function AppLayout(props: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  return (
    <div className={getThemedClassName(theme, [styles['page-wrapper']])}>
      <Provider store={store}>
        <h1>Hehehehe</h1>
        {props.children}
      </Provider>
    </div>
  );
}

export default AppLayout;
