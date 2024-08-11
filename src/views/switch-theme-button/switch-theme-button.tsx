'use client';

import { getThemedClassName, ThemeContext } from '@context/theme-context';
import { useContext } from 'react';

function SwitchThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <button onClick={theme.toggleTheme} className={getThemedClassName(theme, [])}>
      {theme.theme}
    </button>
  );
}

export default SwitchThemeButton;
