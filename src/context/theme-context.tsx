import useLocalStorage from '@hooks/use-local-storage';
import { createContext, PropsWithChildren, useEffect } from 'react';

export type TTheme = 'light' | 'dark';
export interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider(props: PropsWithChildren) {
  const [theme, setTheme, saveTheme] = useLocalStorage<TTheme>('theme', 'dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
}

export function getThemedClassName(context: IThemeContext, styles: Array<string>) {
  let className = '';
  className = styles.join(' ');
  if (context.theme === 'dark') {
    className += ' dark';
  }
  return className.trim();
}
