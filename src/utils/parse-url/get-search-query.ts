export default function getSearchQuery(searchParams: URLSearchParams) {
  if (searchParams.has('searchQuery')) {
    return searchParams.get('searchQuery') as string;
  }
  return '';
}
