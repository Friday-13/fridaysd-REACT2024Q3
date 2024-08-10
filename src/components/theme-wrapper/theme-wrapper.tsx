'use client';

import { getThemedClassName, ThemeContext } from '@context/theme-context';
import { PropsWithChildren, useContext } from 'react';
import styles from './theme-wrapper.module.scss';
import { Provider } from 'react-redux';
import { store } from '../../store';

function ThemeWrapper(props: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  return (
    <Provider store={store}>
      <div className={getThemedClassName(theme, [styles['theme-wrapper']])}>{props.children}</div>;
    </Provider>
  );
}

export default ThemeWrapper;
