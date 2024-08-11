import Pagination from '@components/pagination/pagination';
import { TPeopleReponse } from '@services/api-types';
import createSearchParams from '@utils/create-search-params/create-search-params';
import { usePathname, useRouter } from 'next/navigation';

function getPage(url: string | null) {
  if (url) {
    const page = new URL(url).searchParams.get('page');
    if (page) {
      return Number(page);
    }
  }
  return;
}

function getTotalPages(response: TPeopleReponse) {
  const nextPage = getPage(response.next);
  if (nextPage === undefined) {
    const prevPage = getPage(response.previous);
    if (prevPage !== undefined) {
      return prevPage + 1;
    } else {
      return 1;
    }
  }
  return Math.ceil(response.count / response.results.length);
}

function PeopleListPagination(props: { searchResults: TPeopleReponse }) {
  const router = useRouter();
  const pathName = usePathname();
  const updateSearchParams = createSearchParams();

  const nextPage = getPage(props.searchResults.next);
  const prevPage = getPage(props.searchResults.previous);
  const totalPages = getTotalPages(props.searchResults);

  const setPageCallback = (newValue: number) => {
    router.push(pathName + '?' + updateSearchParams([{ name: 'page', value: `${newValue}` }]), { scroll: false });
  };

  return (
    <Pagination setPageCallback={setPageCallback} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} />
  );
}

export default PeopleListPagination;
