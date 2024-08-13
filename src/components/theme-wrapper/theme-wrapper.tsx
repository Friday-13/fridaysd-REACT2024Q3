'use client';

import { getThemedClassName, ThemeContext } from '@context/theme-context';
import { PropsWithChildren, useContext } from 'react';
import styles from './theme-wrapper.module.scss';

function ThemeWrapper(props: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  return <div className={getThemedClassName(theme, [styles['theme-wrapper']])}>{props.children}</div>;
}

export default ThemeWrapper;
