import ClosePersonButton from '@views/person/close-person-button';
import styles from './person.module.scss';
import { IPerson } from '@services/api-types';

function Person(props: { person: IPerson }) {
  return (
    <div className={[styles.person, styles['results-frame']].join(' ')}>
      <ClosePersonButton />
      <h2>{props.person?.name}</h2>
      <ul>
        <li>Gender: {props.person.gender}</li>
        <li>Mass: {props.person.mass}</li>
        <li>Height: {props.person.height}</li>
        <li>Birth Year: {props.person.birth_year}</li>
        <li>Eye color: {props.person.eye_color}</li>
        <li>Hair color: {props.person.hair_color}</li>
        <li>Skin color: {props.person.skin_color}</li>
      </ul>
    </div>
  );
}

export default Person;
