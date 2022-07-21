import {ITrip} from "../../types/types";
import {createReducer, isAnyOf} from "@reduxjs/toolkit";
import {closeOpenedBooking, fetchTripById, fetchTrips} from "../actions/trips/tripsAction";

interface InitialState {
    trips: ITrip[],
    openedTrip: ITrip | null,
    isLoading: boolean
}
const initialState: InitialState = {
    trips: [],
    openedTrip: null,
    isLoading: false
}
export const tripReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
        state.trips = action.payload!.trips as ITrip[];
        state.isLoading = false;
    });
    builder.addCase(closeOpenedBooking, (state, action) => {
        state.openedTrip = null;
    })

    builder.addCase(fetchTripById.fulfilled, (state, action) => {
        state.openedTrip = action.payload!.trip as ITrip;
        state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(fetchTrips.pending, fetchTripById.pending), (state, action) => {
        state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(fetchTrips.rejected, fetchTripById.rejected), (state, action) => {
        state.isLoading = false;
    });
})