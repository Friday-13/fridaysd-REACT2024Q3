import { Dispatch, SetStateAction, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>, (data: T) => void] {
  const isDataExist = () => {
    return Boolean(localStorage.getItem(key));
  };

  const getData = (): T => {
    if (isDataExist()) {
      return localStorage.getItem(key) as T;
    }
    return initialValue;
  };

  const saveData = (data: T) => {
    const preparedData = `${data}`.trim();
    localStorage.setItem(key, preparedData);
  };

  const [data, setData] = useState<T>(initialValue || getData);

  return [data, setData, saveData];
}

export default useLocalStorage;
