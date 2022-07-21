import {BookingService} from "../../../services/booking/bookingService";
import {errorHandlingAction} from "../../../redux/actions/errorHandling/errorHandlingAction";
import {toast} from "react-toastify";
import {IBookedTrip, IError, ITrip} from "../../../types/types";
import {IUser} from "../../../redux/reducers/userReducer";
import {AppDispatch} from "../../../redux/store/store";
interface ISubmit {
    token: string,
    trip: ITrip,
    user: IUser,
    date: string,
    people: number,
    dispatch: AppDispatch
}

export async function submitHelper(props: ISubmit): Promise<void> {
    const res: IError | IBookedTrip = await BookingService.bookTrip(props.token, {
        tripId: props.trip.id,
        userId: props.user!.id,
        date: props.date,
        guests: props.people
    });
    if ("error" in res && res.error) {
        res.statusCode === 401
            ? props.dispatch(errorHandlingAction(String(res.statusCode)))
            : toast.error(res.message);
    } else {
        toast.info('Successfully booked!');
    }
}
