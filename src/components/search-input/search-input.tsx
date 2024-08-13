'use client';

import { FormEvent, useEffect, useState } from 'react';
import styles from './search-input.module.scss';

interface SearchInputProps {
  labelContent?: string;
  inputName?: string;
  inputInitialValue?: string;
  buttonContent?: string;
  searchCallback?: (event: FormEvent) => void;
  inputChangeCallback?: (newQuery: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const [searchString, setSearchString] = useState(props.inputInitialValue);

  const handleQueryChange = (newValue: FormEvent<HTMLInputElement>) => {
    if (props.inputChangeCallback) {
      props.inputChangeCallback(newValue.currentTarget.value);
    } else {
      setSearchString(newValue.currentTarget.value);
    }
  };

  useEffect(() => {
    setSearchString(props.inputInitialValue);
  }, [props.inputInitialValue]);

  return (
    <form className={styles['search-input']} onSubmit={props.searchCallback}>
      <label htmlFor={props.inputName}>{props.labelContent}</label>
      <input type="search" name={props.inputName} onChange={handleQueryChange} value={searchString} />
      <input type="submit" value={props.buttonContent} />
    </form>
  );
}
