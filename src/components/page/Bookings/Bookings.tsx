import React, {FC} from 'react';
import {IBookedTrip} from "../../../types/types";
import BookingList from "../../common/BookingList/BookingList";
import './Bookings.scss';
import {useTypedSelector} from "../../../redux/hooks/hooks";
import Loader from "../../common/Loader/Loader";
import {useBookingRequest} from "../../../hooks/useBookingRequest";
import {useSortBookings} from "../../../hooks/useSortBookings";

const Bookings: FC = () => {
    const { booked, isLoading } = useTypedSelector(state => state.booked);
    useBookingRequest();
    const sortedBookings:IBookedTrip[] =  useSortBookings(booked)
    return (
        <main className="bookings-page">
            {
                isLoading
                ? <Loader/>
                : <BookingList trips={sortedBookings}/>
            }
        </main>
    );
};

export default Bookings;