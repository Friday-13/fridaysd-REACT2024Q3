import Search from './views/search/search';
import ErrorBoundary from './components/error-boundarie/error-boundarie';

function App() {
  return (
    <ErrorBoundary>
      <Search />
    </ErrorBoundary>
  );
}

export default App;
