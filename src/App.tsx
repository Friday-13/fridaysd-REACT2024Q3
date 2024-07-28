import Search from './views/search/search';
import ErrorBoundary from '@components/error-boundarie/error-boundarie';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Error from './views/error/error';
import Person from './components/person/person';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './context/theme-context';

const searchChildren: Array<RouteObject> = [
  {
    path: 'person/:id',
    Component: Person,
  },
];

const searchRoute: RouteObject = {
  path: '/',
  element: <Search />,
  children: searchChildren,
  errorElement: <ErrorBoundary />,
};

const errorRoute: RouteObject = { path: '*', element: <Error code="404" message="Page not found" /> };
const router = createBrowserRouter([searchRoute, errorRoute]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
