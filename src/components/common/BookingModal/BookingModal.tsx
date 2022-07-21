import React, {FC, FormEvent, useMemo, useState} from 'react';
import {ITrip} from "../../../types/types";
import './BookingModal.scss';
import {useTypedDispatch, useTypedSelector} from "../../../redux/hooks/hooks";
import {ToastContainer} from "react-toastify";
import {submitHelper} from "./onSubmitForm";
import {IUser} from "../../../redux/reducers/userReducer";

interface IProps {
    trip: ITrip,
    closeModal: () => void
}

const BookingModal: FC<IProps> = ({trip, closeModal}) => {
    const [people, setPeople] = useState<number>(1);
    const dispatch = useTypedDispatch();
    const { token, user } = useTypedSelector(state => state.login)
    const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        await submitHelper({token: token as string, trip, user: user as IUser, date, people, dispatch})
        closeModal();
    }
    const [date, setDate] = useState<string>('');
    const totalPrice: number = useMemo(() => {
        return trip.price * people;
    }, [people]);
    return (
        <div className="modal">
            <ToastContainer/>
            <div className="trip-popup">
                <button className="trip-popup__close" onClick={closeModal}>×</button>
                <form className="trip-popup__form" autoComplete="off" onSubmit={e => onSubmitForm(e)}>
                    <div className="trip-info">
                        <h3 className="trip-info__title">{trip.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                            <span className="trip-info__level">easy</span>
                        </div>
                    </div>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Date</span>
                        <input name="date" value={date} onChange={e => setDate(e.target.value)} type="date" required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Number of guests</span>
                        <input name="guests" min={1} max={10} type="number" value={people}
                               onChange={e => setPeople(Number(e.target.value))}/>
                    </label>
                    <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{totalPrice} $</output>
            </span>
                    <button className="button" type="submit">Book a trip</button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;