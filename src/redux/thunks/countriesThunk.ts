import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAll",
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const res = await api.get(`/all`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
