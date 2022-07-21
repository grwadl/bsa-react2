import {createAsyncThunk} from "@reduxjs/toolkit";
import {bookedEnum} from "../../../enums/actions/booked/bookedEnum";
import {AsyncThunkConfig} from "../../store/store";
import {IBookedTrip, IError} from "../../../types/types";
import {toast} from "react-toastify";

interface ReturnType {
    bookedTrips: IBookedTrip[]
}

export const fetchBooked = createAsyncThunk<ReturnType, void, AsyncThunkConfig>
(bookedEnum.getBooked, async (_, { getState, extra: { BookingService } }) => {
    const { login: { token } } = getState();
    const bookedTrips: IBookedTrip[] | IError = await BookingService.getBooked(token as string);
    if ("error" in bookedTrips && bookedTrips.error) {
        toast.error(bookedTrips.message);
        throw bookedTrips.statusCode;
    }
    return {bookedTrips: bookedTrips as IBookedTrip[]}
});
interface ReturnId {
    id: string
}

export const deleteBooking = createAsyncThunk<ReturnId, string, AsyncThunkConfig>
(bookedEnum.deleteBooked, async (id, { getState, extra: { BookingService } }) => {
    const { login: { token } } = getState();
    const res: string | IError = await BookingService.deleteBooked(token as string, id);
    if (typeof res === 'object' && "error" in res && res.error) {
        toast.error(res.message);
        throw res.statusCode;
    }
    return {id}
})
