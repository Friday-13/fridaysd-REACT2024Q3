import { useContext, useEffect, useState } from 'react';
import { IPerson } from '../../services/api-types';
import Loader from '../loader/loader';
import { useGetPersonByIdQuery } from '@services/swapi';
import { getThemedClassName, ThemeContext } from '../../context/theme-context';
import styles from './person.module.scss';
import { useRouter } from 'next/router';

function Person() {
  const router = useRouter();
  const [person, setPerson] = useState<IPerson | undefined>(undefined);
  const { data, error, isLoading, isFetching } = useGetPersonByIdQuery(router.query['id'] as string); // TODO: fix as string approach
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setPerson(data);
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  if (person === undefined || isLoading || isFetching) {
    return (
      <div className={[styles.person, styles['results-frame']].join(' ')}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={[styles.person, styles['results-frame']].join(' ')}>
      <div
        className={getThemedClassName(theme, [styles.close])}
        onClick={() => {
          router.push('/');
        }}
      ></div>
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
