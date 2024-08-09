'use client';

import SearchInput from '@components/search-input/search-input';
import createSearchParams from '@utils/create-search-params/create-search-params';
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent } from 'react';

function SearchPeopleInput(props: { searchParams?: { searchString?: string; page?: number } }) {
  const router = useRouter();
  const path = usePathname();
  const updateSearchParams = createSearchParams();

  const searchCallback = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const newQuery = formData.get('search-string') as string;

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
