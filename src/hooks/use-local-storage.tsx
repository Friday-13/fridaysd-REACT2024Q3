import { Dispatch, SetStateAction, useState } from 'react';

function useLocalStorage(key: string): [string, Dispatch<SetStateAction<string>>, (data: string) => void] {
  const isDataExist = () => {
    return Boolean(localStorage.getItem(key));
  };

  const getData = (): string => {
    if (isDataExist()) {
      return localStorage.getItem(key) as string;
    }
    return '';
  };

  const saveData = (data: string) => {
    const preparedData = data.trim();
    localStorage.setItem(key, preparedData);
  };

  const [data, setData] = useState<string>(getData);

  return [data, setData, saveData];
}

export default useLocalStorage;
