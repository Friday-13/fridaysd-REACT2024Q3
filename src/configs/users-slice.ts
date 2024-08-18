import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInStore } from "./registration-form-types";

export interface UsersState {
  value: Array<IUserInStore>;
}

const initialState: UsersState = {
  value: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserInStore>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
