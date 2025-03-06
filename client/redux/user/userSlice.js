import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    lastPage: "/"
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signUpStart: (state) => {
            state.loading = true;
        },
        signUpSucces: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signUpFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },


        signInStart: (state) => {
            state.loading = true;
        },
        signInSucces: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },


        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        signOutUserStart: (state) => {
            state.loading = true;
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        setLastPage: (state, action) => {
            state.lastPage = action.payload;
        }
    }
});

export const {
    signInStart, 
    signInSucces, 
    signInFailure, 
    UpdateUserSuccess, 
    UpdateUserStart, 
    UpdateUserFailure, 
    deleteUserFailure, 
    deleteUserSuccess, 
    deleteUserStart,
    signOutUserFailure,
    signOutUserStart,
    signOutUserSuccess ,
    signUpStart,
    signUpSucces,
    signUpFailure,
    setLastPage
} = userSlice.actions;

export default userSlice.reducer;
