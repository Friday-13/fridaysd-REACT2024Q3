import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { clear, selectedPeopleSelector } from '../../utils/slices/people-slice';
import { useEffect, useState } from 'react';
import DropDownMenu from '@components/drop-down-menu/drop-down-menu';
import DropDownItem from '@components/drop-down-menu/drop-down-item';

function SelectedPeopleManager() {
  const selectedPeople = useAppSelector(selectedPeopleSelector);
  const [isVisible, setIsVisible] = useState<boolean>(selectedPeople.length > 0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsVisible(selectedPeople.length > 0);
  }, [selectedPeople]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <DropDownMenu menuTitle={`Number of selected ${selectedPeople.length}`}>
      <DropDownItem
        onClick={(e) => {
          e.stopPropagation();
          dispatch(clear());
        }}
      >
        Unselect all
      </DropDownItem>
      <DropDownItem
        onClick={(e) => {
          e.stopPropagation();
          console.log('Downloading...');
        }}
      >
        Download selected
      </DropDownItem>
    </DropDownMenu>
  );
}

export default SelectedPeopleManager;
