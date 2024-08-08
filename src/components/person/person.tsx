// import { useContext, useEffect, useState } from 'react';
// import { IPerson } from '../../services/api-types';
// import Loader from '../loader/loader';
// import { useGetPersonByIdQuery } from '@services/swapi';
// import { getThemedClassName, ThemeContext } from '../../context/theme-context';
import { getPerson } from '@services/api';
import ClosePersonButton from '@views/person/close-person-button';
import styles from './person.module.scss';
// import { useRouter } from 'next/router';
// import closePerson from '@utils/close-person/close-person';

async function Person(props: { id: string }) {
  const person = await getPerson(props.id);
  console.log(person);
  // const router = useRouter();
  // const [person, setPerson] = useState<IPerson | undefined>(undefined);
  // const { data, error, isLoading, isFetching } = useGetPersonByIdQuery(props.id);
  // const theme = useContext(ThemeContext);
  //
  // useEffect(() => {
  //   setPerson(data);
  // }, [data]);
  //
  // useEffect(() => {
  //   if (error) {
  //     console.error(error);
  //   }
  // }, [error]);
  //
  // if (person === undefined || isLoading || isFetching) {
  //   return (
  //     <div className={[styles.person, styles['results-frame']].join(' ')}>
  //       <Loader />
  //     </div>
  //   );
  // }
  //
  return (
    <div className={[styles.person, styles['results-frame']].join(' ')}>
      <ClosePersonButton />
      <h2>{person?.name}</h2>
      <ul>
        <li>Gender: {person.gender}</li>
        <li>Mass: {person.mass}</li>
        <li>Height: {person.height}</li>
        <li>Birth Year: {person.birth_year}</li>
        <li>Eye color: {person.eye_color}</li>
        <li>Hair color: {person.hair_color}</li>
        <li>Skin color: {person.skin_color}</li>
      </ul>
    </div>
  );
}

export default Person;
