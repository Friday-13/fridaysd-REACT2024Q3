import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './utils/slices/people-slice';
import { swApi } from '@services/swapi';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
