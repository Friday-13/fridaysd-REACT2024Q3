import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPerson, IPerson } from '../../services/api';
import Loader from '../loader/loader';

function Person() {
  const params = useParams();
  const [person, setPerson] = useState<IPerson | undefined>(undefined);

  async function getPersonInfo() {
    const id = params['personId'];
    if (id !== null) {
      const personInfo: IPerson = await getPerson(Number(id));
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPerson(personInfo);
    }
  }

  useEffect(() => {
    getPersonInfo();
  }, []);

  if (person === undefined) {
    return (
      <section>
        <Loader />
      </section>
    );
  }

  return (
    <section>
      <h2>{person?.name}</h2>
    </section>
  );
}

export default Person;
