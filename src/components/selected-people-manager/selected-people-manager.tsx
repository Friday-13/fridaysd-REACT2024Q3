import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { clear } from '../../utils/slices/people-slice';
import { useEffect, useState } from 'react';
import DropDownMenu from '@components/drop-down-menu/drop-down-menu';
import DropDownItem from '@components/drop-down-menu/drop-down-item';
import { selectedPeopleSelector } from '../../store';
import DownloadFile from '@utils/download-file/download-file';

function SelectedPeopleManager() {
  const selectedPeople = useAppSelector(selectedPeopleSelector);
  const [isVisible, setIsVisible] = useState<boolean>(selectedPeople.people.length > 0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsVisible(selectedPeople.people.length > 0);
  }, [selectedPeople]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <DropDownMenu menuTitle={`Number of selected ${selectedPeople.people.length}`}>
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
        <DownloadFile fileName={`${selectedPeople.people.length}_people`}>Download selected</DownloadFile>
      </DropDownItem>
    </DropDownMenu>
  );
}

export default SelectedPeopleManager;
