'use client';

import { IPerson } from '@services/api-types';
import styles from './person-in-list.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PersonInList(props: { person: IPerson }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const selectedPeople = useAppSelector(selectedPeopleSelector);
  // const [isSelected, setIsSelected] = useState<boolean>(isPersonInState(selectedPeople, props.person));
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setIsSelected(isPersonInState(selectedPeople, props.person));
  // }, [selectedPeople]);

  return (
    <div className={styles['person-in-list']}>
      {
        // <label
        //   onClick={(e) => {
        //     e.stopPropagation();
        //   }}
        // >
        //   <input
        //     type="checkbox"
        //     checked={isSelected}
        //     onChange={(e) => {
        //       e.stopPropagation();
        //       dispatch(togglePerson(props.person));
        //       setIsSelected(e.target.checked);
        //     }}
        //   />
        // </label>
      }
      <div
        className={styles['person-info']}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          e.stopPropagation();
          const id = props.person.url.split('/').slice(-2, -1);
          router.push(`/${id}` + '?' + searchParams);
        }}
      >
        <div>name: {props.person.name}</div>
        <div>Gender: {props.person.gender}</div>
        <div>Birth year: {props.person.birth_year}</div>
      </div>
    </div>
  );
}
