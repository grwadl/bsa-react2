import {useTypedDispatch} from "../redux/hooks/hooks";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {closeOpenedBooking, fetchTripById} from "../redux/actions/trips/tripsAction";
import {unwrapResult} from "@reduxjs/toolkit";
import {errorHandlingAction} from "../redux/actions/errorHandling/errorHandlingAction";

export type paramsId = {
    tripId: string
}

export const useTripRequest = () => {
    const params = useParams<paramsId>();
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const redirect = ():void =>  navigate('/', {replace: true});
    useEffect((): (() => void) => {
        dispatch(fetchTripById(params.tripId as string))
            .then(unwrapResult)
            .catch(e => Number(e.message) === 401 ? dispatch(errorHandlingAction(e.message)) : redirect());
        return () => dispatch(closeOpenedBooking());
    }, []);
}
