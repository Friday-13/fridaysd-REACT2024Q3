import { IPerson, TPeopleReponse } from '@services/api-types';
import styles from './people-list.module.scss';
import PersonInList from '@components/person-in-list/person-in-list';
import PeopleListPagination from '@views/people-list/pagination/pagination';

function PeopleList(props: { response: TPeopleReponse }) {
  if (!props.response.results) {
    return <h3>No results</h3>;
  }

  return (
    <>
      <div className={styles.people__list}>
        {props.response.results.map((result: IPerson, index: number) => (
          <PersonInList person={result} key={index} />
        ))}
      </div>
      <PeopleListPagination searchResults={props.response} />
    </>
  );
}

export default PeopleList;
