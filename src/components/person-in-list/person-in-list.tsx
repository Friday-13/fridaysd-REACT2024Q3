import { IPerson } from '@services/api-types';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { isPersonInState, togglePerson } from '../../utils/slices/people-slice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { selectedPeopleSelector } from '../../store';
import styles from './person-in-list.module.scss';

export default function PersonInList(props: { person: IPerson }) {
  const navigate = useNavigate();
  const selectedPeople = useAppSelector(selectedPeopleSelector);
  const [isSelected, setIsSelected] = useState<boolean>(isPersonInState(selectedPeople, props.person));
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsSelected(isPersonInState(selectedPeople, props.person));
  }, [selectedPeople]);

  return (
    <div className={styles['person-in-list']}>
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
        className={styles['person-info']}
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
