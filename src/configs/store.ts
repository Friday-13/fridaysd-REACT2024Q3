import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-slice";
import countriesReducer from "./countries-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const usersSelector = (state: RootState) => state.users;
export const countriesSelector = (state: RootState) => state.countries;
