import Pagination from '@components/pagination/pagination';
import { TPeopleReponse } from '@services/api-types';
import { useRouter } from 'next/router';

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

  const nextPage = getPage(props.searchResults.next);
  const prevPage = getPage(props.searchResults.previous);
  const totalPages = getTotalPages(props.searchResults);

  const setPageCallback = (newValue: number) => {
    // const {...searchParams } = router.query;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newValue },
    });
  };

  return (
    <Pagination setPageCallback={setPageCallback} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} />
  );
}

export default PeopleListPagination;
