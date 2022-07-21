import {createReducer} from "@reduxjs/toolkit";
import {IBookedTrip} from "../../types/types";
import {deleteBooking, fetchBooked} from "../actions/trips/bookedAction";

interface InitialState {
    booked: IBookedTrip[],
    isLoading: boolean
}

const initState: InitialState = {
    booked: [],
    isLoading: false
}

export const bookedReducer = createReducer(initState, (builder) => {
    builder.addCase(fetchBooked.pending, (state, action) => {
        state.isLoading = true;
    })
    builder.addCase(fetchBooked.rejected, (state, action) => {
        state.isLoading = false;
    })

    builder.addCase(fetchBooked.fulfilled, (state, action) => {
        const { bookedTrips } = action.payload;
        state.isLoading = false;
        state.booked = bookedTrips as IBookedTrip[];
    })
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
        const {id} = action.payload;
        state.booked = state.booked.filter(item => item.id!== id);
    })
})