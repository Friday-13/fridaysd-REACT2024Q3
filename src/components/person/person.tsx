import { getPerson } from '@services/api';
import ClosePersonButton from '@views/person/close-person-button';
import styles from './person.module.scss';

async function Person(props: { id: string }) {
  const person = await getPerson(props.id);
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
