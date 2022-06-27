import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/models";
import { fetchAllUsers } from "../thunks/users.thunk";

interface UsersState {
  users: [User];
  isLoading: boolean;
  hasError: boolean;
}
const initialState = {
  users: [] as User[],
  isLoading: false,
  hasError: false,
} as UsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const usersReducer = usersSlice.reducer;