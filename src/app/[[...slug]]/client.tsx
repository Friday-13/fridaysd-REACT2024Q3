'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '../../context/theme-context';

const App = dynamic(() => import('../../App'), { ssr: false });

export function ClientOnly() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
