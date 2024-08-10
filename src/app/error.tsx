'use client';

import { ThemeContext } from '@context/theme-context';
import { useContext, useEffect } from 'react';
import styles from '@styles/error.module.scss';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles['error-page']}>
      <h2>{error.message}</h2>
      <button className={theme.theme} onClick={() => reset()}>
        Noooo
      </button>
    </div>
  );
}
