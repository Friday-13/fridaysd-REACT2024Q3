// import Search from './views/search/search';
// import ErrorBoundary from '@components/error-boundarie/error-boundarie';
// import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
// import Error from './views/error/error';
// import Person from './components/person/person';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import { useContext } from 'react';
// import { getThemedClassName, ThemeContext } from './context/theme-context';
// import styles from './App.module.scss';
//
// const searchChildren: Array<RouteObject> = [
//   {
//     path: 'person/:id',
//     Component: Person,
//   },
// ];
//
// const searchRoute: RouteObject = {
//   path: '/',
//   element: <Search />,
//   children: searchChildren,
//   errorElement: <ErrorBoundary />,
// };
//
// const errorRoute: RouteObject = { path: '*', element: <Error code="404" message="Page not found" /> };
// const router = createBrowserRouter([searchRoute, errorRoute]);
//
// function App() {
//   const theme = useContext(ThemeContext);
//   return (
//     <div className={getThemedClassName(theme, [styles['page-wrapper']])}>
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </div>
//   );
// }
//
// export default App;
