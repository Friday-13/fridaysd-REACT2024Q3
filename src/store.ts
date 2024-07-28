import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '@utils/slices/people-slice';
import isPeopleLoadingReducer from '@utils/slices/is-loading-slice';
import currentPageResultsReducer from '@utils/slices/current-page-slice';
import { swApi } from '@services/swapi';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    currentPageResults: currentPageResultsReducer,
    isPeopleLoading: isPeopleLoadingReducer,
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectedPeopleSelector = (state: RootState) => state.people;
export const isPeopleLoadingSelector = (state: RootState) => state.isPeopleLoading;
export const currentPageResultsSelector = (state: RootState) => state.currentPageResults;
