import Search from '@views/search/search';
import { PropsWithChildren } from 'react';
import styles from '../App.module.scss';

interface IRootPage extends PropsWithChildren {
  searchParams?: { searchString?: string; page?: string };
}

export default async function RootPage(props: IRootPage) {
  return (
    <>
      <div id={'root'} className={styles['page-wrapper']}>
        <h2>Root</h2>
        <Search searchParams={props.searchParams}>{props.children}</Search>
      </div>
    </>
  );
}
