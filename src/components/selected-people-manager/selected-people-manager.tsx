import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { clear } from '../../utils/slices/people-slice';
import { useEffect, useState } from 'react';
import DropDownMenu from '@components/drop-down-menu/drop-down-menu';
import DropDownItem from '@components/drop-down-menu/drop-down-item';
import { selectedPeopleSelector } from '../../store';
import generateSelectedPeopleFile from '@utils/download-file/generate-file';
import DownloadFile from '@components/download-file/download-file';

function SelectedPeopleManager() {
  const selectedPeople = useAppSelector(selectedPeopleSelector);
  const [isVisible, setIsVisible] = useState<boolean>(selectedPeople.people.length > 0);
  const [csvContent, setCsvContent] = useState<string>(generateSelectedPeopleFile(selectedPeople.people));
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsVisible(selectedPeople.people.length > 0);
    setCsvContent(generateSelectedPeopleFile(selectedPeople.people));
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
        }}
      >
        <DownloadFile fileName={`${selectedPeople.people.length}_people`} fileContent={csvContent}>
          Download selected
        </DownloadFile>
      </DropDownItem>
    </DropDownMenu>
  );
}

export default SelectedPeopleManager;
