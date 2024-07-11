import { ComponentProps, FormEvent, useState } from 'react';
import styles from './search-input.module.scss';

interface SearchInputProps extends ComponentProps<'div'> {
  label?: {
    content: string;
  };
  input?: {
    name: string;
    initialValue: string;
  };
  button?: ComponentProps<'button'>;
  searchCallback: (query: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (newValue: FormEvent<HTMLInputElement>) => {
    setQuery(newValue.currentTarget.value);
  };

  return (
    <div className={styles.searchInput}>
      <label htmlFor={props.input?.name}>{props.label?.content}</label>
      <input
        type="search"
        name={props.input?.name}
        onChange={handleQueryChange}
        defaultValue={props.input?.initialValue}
      />
      <button
        onClick={() => {
          props.searchCallback(query);
        }}
      >
        {props.button?.content}
      </button>
    </div>
  );
}
