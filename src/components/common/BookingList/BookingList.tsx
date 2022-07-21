import React, {FC} from 'react';
import BookingComponent from "../BookingComponent/BookingComponent";
import './BookingList.scss';
import {IBookedTrip} from "../../../types/types";
import {ToastContainer} from "react-toastify";
import {useDeleteBookings} from "../../../hooks/useDeleteBookings";

interface IPropTypes {
    trips: IBookedTrip[]
}

const BookingList:FC<IPropTypes> = ({trips}) => {
    const handleDelete: (s: string) => Promise<void> = useDeleteBookings()
    return (
        <ul className="bookings__list">
            <ToastContainer />
            {trips?.map(trip => <BookingComponent key={trip.id} onDelete={handleDelete} booked={trip} />)}
        </ul>
    );
};

export default BookingList;