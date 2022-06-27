import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetail } from "../../models/models";
import { fetchUser } from "../thunks/users.thunk";

interface UsersState {
  user: UserDetail;
  isLoading: boolean;
  hasError: boolean;
  cart: string[];
}
const initialState = {
  user: {},
  isLoading: false,
  hasError: false,
  cart: [] as string[],
} as UsersState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart(state: UsersState, action: PayloadAction<string>) {
      state.cart = [...state.cart, action.payload];
      state.cart = state.cart.filter((item, index) => state.cart.indexOf(item) === index)
  },
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
export const { addToCart } = userSlice.actions;

