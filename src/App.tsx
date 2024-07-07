import './App.css';
import SearchInput from './components/search-input/search-input';

function App() {
  function applySearchQuery(query: string) {
    console.log(query);
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
      <section>
        <div> Data 1</div>
        <div> Data 2</div>
        <div> Data 3</div>
        <div> Data 4</div>
        <div> Data 5</div>
      </section>
    </>
  );
}

export default App;
