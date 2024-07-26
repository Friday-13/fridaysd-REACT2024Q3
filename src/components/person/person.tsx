import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IPerson } from '../../services/api';
import Loader from '../loader/loader';
import styles from './person.module.scss';
import closeIcon from '@assets/xmark.svg';
import { useGetPersonByIdQuery } from '@services/swapi';

function Person() {
  const params = useParams();
  const [person, setPerson] = useState<IPerson | undefined>(undefined);
  const navigate = useNavigate();
  const location = useLocation();
  const { data, error, isPersonLoading } = useGetPersonByIdQuery(params['id'] as string); // TODO: fix as string approach

  useEffect(() => {
    setPerson(data);
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  if (person === undefined || isPersonLoading) {
    return (
      <div className={[styles.person, styles.resultsFrame].join(' ')}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={[styles.person, styles.resultsFrame].join(' ')}>
      <div
        className={styles.close}
        onClick={() => {
          navigate(`/${location.search}`);
        }}
      >
        <img src={closeIcon} alt="close" />
      </div>
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
