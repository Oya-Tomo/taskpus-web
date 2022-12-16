import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../models";

export interface authState {
    isLoggedIn: boolean;
    user: User | null;
}

const initialState: authState = {
    isLoggedIn: false,
    user: null,
};

export const login = createAsyncThunk("auth/login", async () => {});

export const logout = createAsyncThunk("auth/logout", async () => {});

export const register = createAsyncThunk("auth/register", async () => {});

export const unregister = createAsyncThunk("auth/unregister", async () => {});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const {} = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
