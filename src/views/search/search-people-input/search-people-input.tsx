'use client';

import SearchInput from '@components/search-input/search-input';
import useLocalStorage from '@hooks/use-local-storage';
import createSearchParams from '@utils/create-search-params/create-search-params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect } from 'react';

function SearchPeopleInput(props: { searchParams?: { searchString?: string; page?: number } }) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const updateSearchParams = createSearchParams();
  const [data, setData, getData, saveData] = useLocalStorage('query', props.searchParams?.searchString || '');

  useEffect(() => {
    setData(getData());
  }, []);

  useEffect(() => {
    if (!searchParams.get('searchString')) {
      router.push(
        path +
          '?' +
          updateSearchParams([
            { name: 'searchString', value: data },
            { name: 'page', value: '1' },
          ])
      );
    }
  }, [data]);

  const searchCallback = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const newQuery = formData.get('search-string') as string;
    setData(newQuery);
    saveData(newQuery);

    if (newQuery !== '') {
      router.push(
        path +
          '?' +
          updateSearchParams([
            { name: 'searchString', value: newQuery },
            { name: 'page', value: '1' },
          ])
      );
      return;
    }
    router.push(path);
  };

  return (
    <SearchInput
      labelContent={'Input'}
      inputName={'search-string'}
      inputInitialValue={props.searchParams?.searchString || ''}
      buttonContent={'Search'}
      searchCallback={searchCallback}
    />
  );
}

export default SearchPeopleInput;
