import { createSlice } from "@reduxjs/toolkit";
import listOfCountiers from "./list-of-countries";

export interface CountriesState {
  value: Array<string>;
}

const initialState: CountriesState = {
  value: listOfCountiers,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
