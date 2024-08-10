import { PropsWithChildren } from 'react';
import SearchResultsSection from './sections/search-results-section';
import SearchPeopleInput from './search-people-input/search-people-input';
import SwitchThemeButton from '@views/switch-theme-button/switch-theme-button';
import SelectedPeopleManager from '@components/selected-people-manager/selected-people-manager';
import ThrowErrorSection from './sections/throw-error-section';

interface ISearch extends PropsWithChildren {
  searchParams?: { searchString?: string; page?: number };
}

export default async function Search(props: ISearch) {
  return (
    <>
      <SwitchThemeButton />
      <h1> Star Wars Characters </h1>
      <section>
        <SearchPeopleInput searchParams={props.searchParams} />
      </section>
      <SearchResultsSection query={props.searchParams?.searchString || ''} page={props.searchParams?.page}>
        {props.children}
      </SearchResultsSection>
      <section>
        <SelectedPeopleManager />
      </section>
      <ThrowErrorSection />
    </>
  );
}
