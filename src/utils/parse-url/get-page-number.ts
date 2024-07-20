export default function getPageNumber(searchParams: URLSearchParams) {
  if (searchParams.has('page')) {
    return Number(searchParams.get('page'));
  }
}
