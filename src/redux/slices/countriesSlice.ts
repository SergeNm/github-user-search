import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllCountries } from "../thunks/countriesThunk";

interface CountriesState {
  countries: any[];
  allCountries: any[];
  regions?: string[];
  loading: boolean;
  error: boolean;
  keyword?: string;
}
const initialState = {
  countries: [],
  allCountries: [],
  loading: true,
  error: false,
} as CountriesState;

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setKeyword(state: CountriesState, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    searchCountry(state: CountriesState) {
      state.countries = state.allCountries.filter(
        (el) =>
          el.name.common.toLowerCase().indexOf(state.keyword?.toLowerCase()) !==
          -1
      );
    },
    filterByRegion(state: CountriesState, action: PayloadAction<string>) {
      if (action.payload)
        state.countries = state.allCountries.filter(
          (el) => el.region === action.payload
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountries.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.allCountries = payload;
      const regions = state.allCountries.map((el) => el.region);
      state.regions = regions.filter((c, index) => {
        return regions.indexOf(c) === index;
      });
      state.loading = false;
    });
    builder.addCase(fetchAllCountries.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;
export const { setKeyword, searchCountry, filterByRegion } = countriesSlice.actions;
