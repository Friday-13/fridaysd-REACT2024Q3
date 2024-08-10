import { Dispatch, SetStateAction, useState } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>, () => T, (data: T) => void] {
  const [data, setData] = useState<T>(initialValue);

  const isDataExist = () => {
    if (window !== undefined) {
      return Boolean(localStorage.getItem(key));
    }
    return false;
  };

  const getData = (): T => {
    if (isDataExist()) {
      return localStorage.getItem(key) as T;
    }
    return initialValue;
  };

  const saveData = (data: T) => {
    if (window !== undefined) {
      const preparedData = `${data}`.trim();
      localStorage.setItem(key, preparedData);
    }
  };

  return [data, setData, getData, saveData];
}

export default useLocalStorage;
