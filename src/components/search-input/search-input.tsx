import { ComponentProps, FormEvent } from 'react';
import styles from './search-input.module.scss';

interface SearchInputProps extends ComponentProps<'div'> {
  labelContent?: string;
  inputName?: string;
  inputInitialValue?: string;
  buttonContent?: string;
  searchCallback: (event: FormEvent) => void;
  inputChangeCallback: (newQuery: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const handleQueryChange = (newValue: FormEvent<HTMLInputElement>) => {
    props.inputChangeCallback(newValue.currentTarget.value);
  };
  return (
    <form className={styles.searchInput} onSubmit={props.searchCallback}>
      <label htmlFor={props.inputName}>{props.labelContent}</label>
      <input type="search" name={props.inputName} onChange={handleQueryChange} value={props.inputInitialValue} />
      <input type="submit" value={props.buttonContent} />
    </form>
  );
}
