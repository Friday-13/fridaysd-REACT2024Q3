import { Component, ComponentProps } from 'react';
import SearchInput from '../../components/search-input/search-input';
import SeachResults from '../../components/search-results/search-results';
import { getPeople, person } from '../../services/api';

export default class Search extends Component<ComponentProps<'div'>> {
  state = {
    searchResults: [],
    hasError: false,
  };

  setResults(results: Array<person>) {
    this.setState({
      searchResults: results,
    });
  }

  setHasError() {
    this.setState({
      hasError: true,
    });
  }

  async applySearchQuery(query: string) {
    const people = await getPeople(query);
    this.setResults(people);
  }

  render() {
    if (this.state.hasError) {
      throw new Error('The Emperor Will Show You The True Nature Of The Force...');
    }
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
        <button
          onClick={() => {
            this.setHasError();
          }}
        >
          Throw Error
        </button>
      </>
    );
  }
}
