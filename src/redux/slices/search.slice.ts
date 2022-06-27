import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/models";
import { searchUsers } from "../thunks/users.thunk";

interface UsersState {
    isLoading: boolean;
    hasError: boolean;
    isSuccess: boolean;
    query: string;
    results: { items: [User] };
    history: Array<string>;
    isShowHistory: boolean;
}
const initialState = {
    isLoading: false,
    hasError: false,
    results: {},
    history: [] as Array<string>,
    isShowHistory: false,
    isSuccess: false
} as UsersState;

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery(state: UsersState, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setHistory(state: UsersState, action: PayloadAction<string>) {
            state.history = [...state.history, action.payload]
            state.history = state.history.filter((item, index) => state.history.indexOf(item) === index)
        },
        setShowHistory(state: UsersState, action: PayloadAction<boolean>) {
            state.isShowHistory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchUsers.pending, (state, { payload }) => {
            state.isLoading = true;
            state.hasError = false;
            state.isSuccess = false;
        });
        builder.addCase(searchUsers.fulfilled, (state, { payload }) => {
            state.results = payload;
            state.hasError = false;
            state.isLoading = false;
            state.isSuccess = true;
        });
        builder.addCase(searchUsers.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.hasError = true;
            state.isSuccess = false;
        });
    },
});

export const searchReducer = searchSlice.reducer;
export const { setQuery, setHistory, setShowHistory } = searchSlice.actions;

