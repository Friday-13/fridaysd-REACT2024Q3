import Search from './views/search/search';
import ErrorBoundary from './components/error-boundarie/error-boundarie';
import { Route, Routes } from 'react-router-dom';
import Error from './views/error/error';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="*" element={<Error code="404" message="Page not found" />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
