import Search from '@views/search/search';
import { PropsWithChildren } from 'react';
import styles from '../App.module.scss';

export default function RootPage(props: PropsWithChildren) {
  return (
    <>
      <div id={'root'} className={styles['page-wrapper']}>
        <Search>{props.children}</Search>
      </div>
    </>
  );
}
