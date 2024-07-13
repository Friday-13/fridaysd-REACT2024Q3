interface IPagination {
  nextPage?: number;
  prevPage?: number;
  currentPage?: number;
  totalPages?: number;
  currentUrl: URL;
}

type TPage = {
  number: number;
  url: number;
};

function Pagination(props: IPagination) {
  const prevLink = props.currentUrl.searchParams.set('page', `${props.prevPage}`);
  const nextLink = props.currentUrl.searchParams.set('page', `${props.nextPage}`);
  return (
    <div>
      Pagination
      {props.prevPage && <div>{'<'}</div>}
      {props.currentPage && <div>{props.currentPage}</div>}
      {props.nextPage && <div>{'>'}</div>}
    </div>
  );
}

export default Pagination;
