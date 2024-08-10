import { PropsWithChildren } from 'react';
import SearchResultsSection from './sections/search-results-section';
import SearchPeopleInput from './search-people-input/search-people-input';

interface ISearch extends PropsWithChildren {
  searchParams?: { searchString?: string; page?: number };
}

export default async function Search(props: ISearch) {
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
