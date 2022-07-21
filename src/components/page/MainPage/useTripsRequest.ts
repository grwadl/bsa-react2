import {useEffect} from "react";
import {fetchTrips} from "../../../redux/actions/trips/tripsAction";
import {unwrapResult} from "@reduxjs/toolkit";
import {errorHandlingAction} from "../../../redux/actions/errorHandling/errorHandlingAction";
import {useTypedDispatch} from "../../../redux/hooks/hooks";

export const useTripsRequest = () => {
    const dispatch = useTypedDispatch();
    useEffect(() => {
        dispatch(fetchTrips())
            .then(unwrapResult)
            .catch(e => dispatch(errorHandlingAction(e.message)))
    }, []);
}