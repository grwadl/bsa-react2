import React, {FC} from 'react';
import {IBookedTrip} from "../../../types/types";
import {useNormalDate} from "../../../hooks/useNormalDate";
import './BookingComponent.scss';

interface IProps {
    booked: IBookedTrip,
    onDelete: (id: string) => Promise<void>
}

const BookingComponent: FC<IProps> = ({booked, onDelete}) => {
    const dateNormal: string = useNormalDate(booked);

    return (
        <li className="booking">
            <h3 className="booking__title">{booked.trip.title}</h3>
            <span className="booking__guests">{booked.guests} guests</span>
            <span className="booking__date">{dateNormal}</span>
            <span className="booking__total">{booked.totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking" onClick ={() => onDelete(booked.id)}>
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
};

export default BookingComponent;