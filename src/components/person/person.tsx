import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPerson, IPerson } from '../../services/api';
import Loader from '../loader/loader';
import styles from './person.module.scss';

function Person() {
  const params = useParams();
  const [person, setPerson] = useState<IPerson | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getPersonInfo() {
    const id = params['personId'];
    if (id !== null) {
      setIsLoading(true);
      const personInfo: IPerson = await getPerson(Number(id));
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
      setPerson(personInfo);
    }
  }

  useEffect(() => {
    getPersonInfo();
  }, [params]);

  if (person === undefined || isLoading) {
    return (
      <section>
        <Loader />
      </section>
    );
  }

  return (
    <div className={styles.person}>
      <h2>{person?.name}</h2>
      <ul>
        <li>{person.gender}</li>
        <li>{person.mass}</li>
        <li>{person.height}</li>
        <li>{person.birth_year}</li>
      </ul>
    </div>
  );
}

export default Person;
