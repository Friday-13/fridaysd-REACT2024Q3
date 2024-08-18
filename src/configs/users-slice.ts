import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IRegistrationForm from "./registration-form-types";

export interface UsersState {
  value: Array<IRegistrationForm>;
}

const initialState: UsersState = {
  value: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IRegistrationForm>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
