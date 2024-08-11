import SearchInput from '@components/search-input/search-input';
import useLocalStorage from '@hooks/use-local-storage';
import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';

function SearchPeopleInput(props: { searchParams?: { searchString?: string; page?: number } }) {
  const router = useRouter();
  const [_data, setData, getData, saveData] = useLocalStorage('query', props.searchParams?.searchString || '');

  useEffect(() => {
    if (router.query['searchString'] === undefined) {
      const actualData = getData();
      router.push({ pathname: router.pathname, query: { searchString: actualData } });
      setData(actualData);
    }
  }, [router.isReady]);

  const searchCallback = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const newQuery = formData.get('search-string') as string;
    setData(newQuery);
    saveData(newQuery);

    if (newQuery !== '') {
      router.push({ pathname: router.pathname, query: { searchString: newQuery } });
      return;
    }
    router.push({ pathname: router.pathname });
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
