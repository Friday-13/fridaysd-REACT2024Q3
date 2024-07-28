// import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
// import Search from '../../../views/search/search';
// import apiResponse from '../../people.json';
// import { MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { swApi } from '@services/swapi';
// import { TPeopleReponse } from '@services/api-types';
//
// const mockStore = configureStore([]);
//
// test('Renders the search page', async () => {
//   const store = mockStore({
//     isPeopleLoading: { value: false },
//     currentPageResults: { people: apiResponse.results.slice(0, 5) },
//     people: { people: apiResponse.results.slice(0, 5) },
//   });
//
//   const mockData: TPeopleReponse = {
//     results: apiResponse.results,
//     count: apiResponse.count,
//     currentUrl: new URL('https://swapi.dev/api/'),
//     previous: apiResponse.previous,
//     next: apiResponse.next,
//   };
//
//   jest.spyOn(swApi.endpoints.getPeople, 'select').mockReturnValue({
//     data: mockData,
//     error: undefined,
//     isLoading: false,
//   });
//   render(
//     <MemoryRouter>
//       <Provider store={store}>
//         <Search />
//       </Provider>
//     </MemoryRouter>
//   );
//   expect(true).toBeTruthy();
// });
