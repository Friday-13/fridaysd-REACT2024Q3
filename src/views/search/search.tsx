import { PropsWithChildren } from 'react';
import SearchResultsSection from './sections/search-results-section';
import SearchPeopleInput from './search-people-input/search-people-input';

interface ISearch extends PropsWithChildren {
  searchParams?: { searchString?: string; page?: number };
}

export default async function Search(props: ISearch) {
  // const router = useRouter();
  // const [page, setPage] = useState<number | undefined>(undefined);
  // const [query, setQuery, getQuery, saveQuery] = useLocalStorage<string>('query', '');
  // const theme = useContext(ThemeContext);
  //
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const searchQueryURL = router.query['search-string'];
  //   const pageURL = Number(router.query['page']);
  //   if (searchQueryURL === undefined) {
  //     const savedQuery = getQuery();
  //     setQuery(savedQuery);
  //     router.push(
  //       {
  //         pathname: router.pathname,
  //         query: { ...router.query, 'search-string': savedQuery },
  //       },
  //       undefined,
  //       { shallow: true }
  //     );
  //     return;
  //   }
  //   if (query !== searchQueryURL) {
  //     setQuery(`${searchQueryURL}` || '');
  //     setPage(pageURL || 1);
  //   }
  // }, [router.isReady]);
  //
  // const searchCallback = (event: FormEvent) => {
  // event.preventDefault();
  // const formData = new FormData(event.currentTarget as HTMLFormElement);
  // const newQuery = formData.get('search-string') as string;
  // saveQuery(newQuery);
  // setQuery(newQuery);
  // setPage(1);
  // if (newQuery !== '') {
  //   router.push(
  //     {
  //       pathname: router.pathname,
  //       query: { ...router.query, 'search-string': newQuery },
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  //   return;
  // }
  // router.push(
  //   {
  //     pathname: router.pathname,
  //     query: { ...router.query, 'search-string': newQuery },
  //   },
  //   undefined,
  //   { shallow: true }
  // );
  // };
  //
  // const setPageCallback = (newValue: number) => {
  //   router.push(
  //     {
  //       pathname: router.pathname,
  //       query: { ...router.query, page: newValue },
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  //   setPage(newValue);
  // };
  return (
    <>
      {
        // <button onClick={theme.toggleTheme} className={getThemedClassName(theme, [])}>
        //   {theme.theme}
        // </button>
      }
      <h1> Star Wars Characters </h1>
      <section>
        <SearchPeopleInput searchParams={props.searchParams} />
      </section>
      <SearchResultsSection query={props.searchParams?.searchString || ''} page={props.searchParams?.page}>
        {props.children}
      </SearchResultsSection>
      {
        // <section>
        //   <SelectedPeopleManager />
        // </section>
        // <ThrowErrorSection />
      }
    </>
  );
}
