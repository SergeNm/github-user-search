import { createSlice } from "@reduxjs/toolkit";
import { UserDetail } from "../../models/models";
import { fetchUser } from "../thunks/users.thunk";

interface UsersState {
  user: UserDetail;
  isLoading: boolean;
  hasError: boolean;
}
const initialState = {
  user: {},
  isLoading: false,
  hasError: false,
} as UsersState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const userReducer = userSlice.reducer;

