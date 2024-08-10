import Search from '@views/search/search';
import { PropsWithChildren } from 'react';
import styles from '../App.module.scss';

export interface IRootPage extends PropsWithChildren {
  searchParams?: { searchString?: string; page?: number };
}

export default async function RootPage({ searchParams }: { searchParams: { searchString?: string; page?: number } }) {
  return (
    <div id={'root'} className={styles['page-wrapper']}>
      <Search searchParams={searchParams}></Search>
    </div>
  );
}
