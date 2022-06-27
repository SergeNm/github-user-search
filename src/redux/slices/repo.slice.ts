import { createSlice } from "@reduxjs/toolkit";
import { Repo } from "../../models/models";
import {  fetchUserRepos } from "../thunks/users.thunk";

interface ReposState {
  repos: [Repo];
  isLoading: boolean;
  hasError: boolean;
}
const initialState = {
  repos: [{}],
  isLoading: false,
  hasError: false,
} as ReposState;


const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepos.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserRepos.fulfilled, (state, { payload }) => {
      state.repos = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUserRepos.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const repoReducer = repoSlice.reducer;

