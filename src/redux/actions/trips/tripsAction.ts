import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {tripsEnum} from "../../../enums/actions/trip/tripEnum";
import {AsyncThunkConfig} from "../../store/store";
import {IError, ITrip} from "../../../types/types";
import {toast} from "react-toastify";

interface IReturnTrips {
    trips: ITrip[]
}

export const fetchTrips = createAsyncThunk<IReturnTrips, void, AsyncThunkConfig>
(tripsEnum.getTrips, async(_, { getState, extra: { TripService } }) => {
    const { login: { token } } = getState();
    const trips: ITrip[] | IError = await TripService.fetchTrips(token as string);
    if ("error" in trips && trips.error) {
        toast.error(trips.message);
        throw trips.statusCode;
    }
    return {trips: trips as ITrip[]}
});

interface ITripReturn {
    trip: ITrip
}

export const fetchTripById = createAsyncThunk<ITripReturn, string, AsyncThunkConfig>
(tripsEnum.getTripById, async(id, { getState, extra: { TripService } }) => {
    const { login: { token } } = getState();
    const trip: ITrip | IError = await TripService.fetchTripById(token as string, id);
    if ("error" in trip && trip.error) {
        toast.error(trip.message);
        throw trip.statusCode;
    }
    return {trip: trip as ITrip}
});

export const closeOpenedBooking = createAction(tripsEnum.closeOpened, () => {
    return {payload: null}
})