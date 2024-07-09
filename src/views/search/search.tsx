import { Component, ComponentProps } from 'react';
import SearchInput from '../../components/search-input/search-input';
import SeachResults from '../../components/search-results/search-results';
import { getPeople, person } from '../../services/api';
import QueryStorge from '../../services/query-storage';

export default class Search extends Component<ComponentProps<'div'>> {
  state = {
    searchResults: [],
    hasError: false,
    isLoading: false,
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

  setIsLoading(status: boolean) {
    this.setState({
      isLoading: status,
    });
  }

  async applySearchQuery(query: string) {
    QueryStorge.saveQuery(query);
    this.setIsLoading(true);
    const people = await getPeople(query);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.setIsLoading(false);
    this.setResults(people);
  }

  componentDidMount() {
    const initialQuery = QueryStorge.getQuery();
    this.applySearchQuery(initialQuery);
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
            input={{ name: 'search-string', initialValue: QueryStorge.getQuery() }}
            button={{
              content: 'Search',
            }}
            searchCallback={this.applySearchQuery.bind(this)}
          ></SearchInput>
        </section>
        <section>
          <SeachResults searchResults={this.state.searchResults} isLoading={this.state.isLoading} />
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
