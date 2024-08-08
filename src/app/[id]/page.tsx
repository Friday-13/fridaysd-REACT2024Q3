import Person from '@components/person/person';
import { IPerson, TPeopleReponse } from '@services/api-types';

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

export default async function PersonPage({ params }: { params: { id: string } }) {
  return <Person id={params.id} />;
}
