import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPerson, IPerson } from '../../services/api';
import Loader from '../loader/loader';
import styles from './person.module.scss';
import closeIcon from '@assets/xmark.svg';

function Person() {
  const params = useParams();
  const [person, setPerson] = useState<IPerson | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  async function getPersonInfo() {
    const id = params['id'];
    if (id !== null) {
      setIsLoading(true);
      const personInfo: IPerson = await getPerson(Number(id));
      await new Promise((resolve) => setTimeout(resolve, 100));
      setIsLoading(false);
      setPerson(personInfo);
    }
  }

  useEffect(() => {
    getPersonInfo();
  }, [params]);

  if (person === undefined || isLoading) {
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
