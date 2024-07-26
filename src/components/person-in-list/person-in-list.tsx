import { IPerson } from '@services/api';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { isPersonInState, selectedPeopleSelector, togglePerson } from '../../utils/slices/people-slice';
import styles from './person-in-list.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PersonInList(props: { person: IPerson }) {
  const navigate = useNavigate();
  const selectedPeople = useAppSelector(selectedPeopleSelector);
  const [isSelected, setIsSelected] = useState<boolean>(isPersonInState(selectedPeople, props.person));
  const dispatch = useAppDispatch();

  return (
    <div className={styles.personInList}>
      <label
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation();
            dispatch(togglePerson(props.person));
            setIsSelected(e.target.checked);
          }}
        />
      </label>
      <div
        className={styles.personInfo}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          e.stopPropagation();
          const id = props.person.url.split('/').slice(-2, -1);
          navigate(`/person/${id}${location.search}`);
        }}
      >
        <div>name: {props.person.name}</div>
        <div>Gender: {props.person.gender}</div>
        <div>Birth year: {props.person.birth_year}</div>
      </div>
    </div>
  );
}
