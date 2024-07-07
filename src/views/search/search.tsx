import { Component, ComponentProps } from 'react';
import SearchInput from '../../components/search-input/search-input';
import SeachResults from '../../components/search-results/search-results';
import { getPeople, person } from '../../services/api';

export default class Search extends Component<ComponentProps<'div'>> {
  state = {
    searchResults: [],
  };

  setResults(results: Array<person>) {
    this.setState({
      searchResults: results,
    });
  }

  async applySearchQuery(query: string) {
    console.log(query);
    const people = await getPeople(query);
    this.setResults(people);
  }

  render() {
    return (
      <>
        <h1> Star Wars Characters </h1>
        <section>
          <SearchInput
            label={{ content: 'Input' }}
            input={{ name: 'search-string' }}
            button={{
              content: 'Search',
            }}
            searchCallback={this.applySearchQuery.bind(this)}
          ></SearchInput>
        </section>
        <section>
          <SeachResults searchResults={this.state.searchResults} />
        </section>
      </>
    );
  }
}
