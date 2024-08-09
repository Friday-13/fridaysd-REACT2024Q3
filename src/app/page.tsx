import Search from '@views/search/search';
import { PropsWithChildren } from 'react';
import styles from '../App.module.scss';
import { getPeople } from '../services/api';

interface IRootPage extends PropsWithChildren {
  searchParams?: { searchString?: string; page?: string };
}

export default async function RootPage(props: IRootPage) {
  const people = await getPeople(props.searchParams.searchString, props.searchParams.page);
  return (
    <>
      <div id={'root'} className={styles['page-wrapper']}>
        <h2>Root</h2>
        <Search response={people} searchParams={props.searchParams}>
          {props.children}
        </Search>
      </div>
    </>
  );
}
