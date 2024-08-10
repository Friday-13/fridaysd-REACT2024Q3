import Person from '@components/person/person';
import { IPerson, TPeopleReponse } from '@services/api-types';
import styles from '../../App.module.scss';
import Search from '@views/search/search';

export async function generateStaticParams() {
  const answer = await fetch('https://swapi.dev/api/people/');
  const data = await answer.json();
  const rawResponse: TPeopleReponse = {
    results: data.results as Array<IPerson>,
    next: data.next,
    previous: data.previous,
    count: data.count,
    currentUrl: new URL('https://swapi.dev/api/people/'),
  };
  const count = rawResponse.count;
  const ids = Array.from({ length: count }, (_, index) => `${index + 1}`);
  const pages = ids.map((id) => {
    return {
      id: id,
    };
  });
  return pages;
}
interface IPersonPage {
  searchParams?: { searchString?: string; page?: number };
  params: { id: string };
}

export default async function PersonPage(props: IPersonPage) {
  return (
    <div id={'root'} className={styles['page-wrapper']}>
      <h2>Person</h2>
      <Search searchParams={props.searchParams}>
        <Person id={props.params.id} />
      </Search>
    </div>
  );
}
