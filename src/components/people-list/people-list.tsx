import { IPerson } from '@services/api-types';
import styles from './people-list.module.scss';
import { getPeople } from '@services/api';
import PersonInList from '@components/person-in-list/person-in-list';
import PeopleListPagination from '@views/people-list/pagination/pagination';

async function PeopleList(props: { query: string; page?: number }) {
  const response = await getPeople(props.query, props.page);

  return (
    <>
      <div className={styles.people__list}>
        {response.results.map((result: IPerson, index: number) => (
          <PersonInList person={result} key={index} />
        ))}
      </div>
      <PeopleListPagination searchResults={response} />
    </>
  );
}

export default PeopleList;
