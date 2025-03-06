import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentBooking: null,
    temporaryBooking: null
};

const userSlice = createSlice({
    name: "booking",
    initialState,
    reducers:{
        setCurrentBooking: (state, action) => {
            state.currentBooking = action.payload;
        },
        setTemporaryBooking: (state, action) => {
            state.temporaryBooking = action.payload;
        },
    }
});

export const {
    setCurrentBooking,
    setTemporaryBooking
} = userSlice.actions;

export default userSlice.reducer;
