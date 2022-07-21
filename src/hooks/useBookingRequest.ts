import {useTypedDispatch} from "../redux/hooks/hooks";
import {useEffect} from "react";
import {fetchBooked} from "../redux/actions/trips/bookedAction";
import {unwrapResult} from "@reduxjs/toolkit";
import {errorHandlingAction} from "../redux/actions/errorHandling/errorHandlingAction";

export const useBookingRequest = () => {
    const dispatch = useTypedDispatch()
    useEffect(() => {
        dispatch(fetchBooked())
            .then(unwrapResult)
            .catch(e => dispatch(errorHandlingAction(e.message)))
    }, []);
}