import Person from '@components/person/person';
import { getPeople, getPerson } from '@services/api';
import { IPerson, TPeopleReponse } from '@services/api-types';
import { GetServerSidePropsContext } from 'next';
import styles from '../App.module.scss';
import Search from '@views/search/search';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = Number(context.query['page']) || undefined;
  const searchString = context.query['searchString'] as string;
  let id: string = '1';
  if (context.params && context.params['id']) {
    id = String(context.params['id']) || '1';
  }
  const responsePeople: TPeopleReponse = await getPeople(searchString, page);
  const responsePerson: IPerson = await getPerson(id);
  return {
    props: {
      searchParams: { page: page || null, searchString: searchString || null },
      responsePeople,
      responsePerson,
    },
  };
}

export default function PersonPage(props: {
  searchParams: { page: number | null; searchString: string | null };
  responsePeople: TPeopleReponse;
  responsePerson: IPerson;
}) {
  const page = props.searchParams.page || undefined;
  const searchString = props.searchParams.searchString || undefined;
  return (
    <div id={'root'} className={styles['page-wrapper']}>
      <Search searchParams={{ page, searchString }} response={props.responsePeople}>
        <Person person={props.responsePerson} />
      </Search>
    </div>
  );
}
