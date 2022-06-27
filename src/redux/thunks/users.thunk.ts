import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchQuery, UserName } from "../../models/models";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchAllUsers = createAsyncThunk(
  "github/users",
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const res = await api.get(`/users`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const fetchUser = createAsyncThunk(
  "github/user",
  async ({login}:UserName, { rejectWithValue }) => {
    try {
      const res = await api.get(`/users/${login}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const fetchUserRepos = createAsyncThunk(
  "github/userRepos",
  async ({login}:UserName, { rejectWithValue }) => {
    try {
      const res = await api.get(`/users/${login}/repos`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchUsers = createAsyncThunk(
  "github/searchUsers",
  async ({query}:SearchQuery, { rejectWithValue }) => {
    try {
      const res = await api.get(`/search/users?q=${query}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)