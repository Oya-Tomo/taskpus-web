import { createSlice } from "@reduxjs/toolkit";

export enum UserPermission {
    owner = 0,
    admin = 1,
    member = 2,
}

export interface UserState {
    isLoggedIn: boolean;
    name: string | null;
    email: string | null;
}

const initialState: UserState = {
    isLoggedIn: false,
    name: null,
    email: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
});
