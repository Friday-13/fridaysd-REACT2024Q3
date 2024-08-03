export default function getPageNumber(searchParams: ParsedUrlQ) {
  if (searchParams.has('page')) {
    return Number(searchParams.get('page'));
  }
}
