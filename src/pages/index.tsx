import { getPeople } from '@services/api';
import { TPeopleReponse } from '@services/api-types';
import Search from '@views/search/search';
import { GetServerSidePropsContext } from 'next';
import styles from '../App.module.scss';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = Number(context.query['page']) || undefined;
  const searchString = context.query['searchString'] as string;
  const response: TPeopleReponse = await getPeople(searchString, page);
  return {
    props: {
      searchParams: { page: page || null, searchString: searchString || null },
      response,
    },
  };
}

export default function Page(props: {
  searchParams: { page: number | null; searchString: string | null };
  response: TPeopleReponse;
}) {
  const page = props.searchParams.page || undefined;
  const searchString = props.searchParams.searchString || undefined;
  return (
    <div id={'root'} className={styles['page-wrapper']}>
      <Search searchParams={{ page, searchString }} response={props.response}></Search>
    </div>
  );
}
