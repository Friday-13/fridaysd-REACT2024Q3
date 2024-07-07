import './App.css';
import SearchInput from './components/search-input/search-input';
import getPeople from './services/api';

function App() {
  async function applySearchQuery(query: string) {
    console.log(query);
    const people = await getPeople(query);
    console.log(people);
  }
  return (
    <>
      <h1> API searcher </h1>
      <section>
        <SearchInput
          label={{ content: 'Input' }}
          input={{ name: 'search-string' }}
          button={{
            content: 'Search',
          }}
          searchCallback={applySearchQuery}
        ></SearchInput>
      </section>
      <section></section>
    </>
  );
}

export default App;
