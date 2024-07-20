import Search from './views/search/search';
import ErrorBoundary from '@components/error-boundarie/error-boundarie';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Error from './views/error/error';
import Person from './components/person/person';

const searchChildren: Array<RouteObject> = [
  {
    path: ':perssonId',
    Component: Person,
  },
];

const searchRoute: RouteObject = { path: '/', element: <Search />, children: searchChildren };
const errorRoute: RouteObject = { path: '*', element: <Error code="404" message="Page not found" /> };

const router = createBrowserRouter([searchRoute, errorRoute]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
