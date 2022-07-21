import {useTypedDispatch} from "../redux/hooks/hooks";
import {deleteBooking} from "../redux/actions/trips/bookedAction";
import {unwrapResult} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {errorHandlingAction} from "../redux/actions/errorHandling/errorHandlingAction";

export const useDeleteBookings = (): ((s: string) => Promise<void>) => {
    const dispatch = useTypedDispatch()
    const handleDelete = async (id: string): Promise<void> => {
        dispatch(deleteBooking(id))
            .then(unwrapResult)
            .then(() => toast.info('Booking was cancelled!'))
            .catch(e => Number(e.message) === 401 ? dispatch(errorHandlingAction(e.message)) : null);
    }
    return handleDelete;
}