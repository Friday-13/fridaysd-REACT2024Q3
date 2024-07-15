import Search from './views/search/search';
import ErrorBoundary from '@components/error-boundarie/error-boundarie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './views/error/error';
import Person from './components/person/person';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}>
            <Route path=":personId" element={<Person />} />
          </Route>
          <Route path="*" element={<Error code="404" message="Page not found" />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
