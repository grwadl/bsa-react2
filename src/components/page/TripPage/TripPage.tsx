import React, {FC, useState} from 'react';
import {ITrip} from "../../../types/types";
import BookingModal from "../../common/BookingModal/BookingModal";
import './TripPage.scss';
import {useTypedSelector} from "../../../redux/hooks/hooks";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../common/Loader/Loader";
import {useTripRequest} from "../../../hooks/useTripRequest";

const TripPage: FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const closeModal = ():void => setModalOpen(false);
    const {openedTrip, isLoading} = useTypedSelector(state => state.trips);
    useTripRequest();
    if(isLoading) {
        return  <main className="trip-page"><Loader /></main>
    }
    return (
        <main className="trip-page">
            <ToastContainer/>
            {modalOpen && <BookingModal trip={openedTrip as ITrip} closeModal={closeModal}/>}
            <div className="trip">
                <img src={openedTrip?.image} className="trip__img" alt="trip image"/>
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{openedTrip?.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{openedTrip?.duration}</strong> days</span>
                            <span className="trip-info__level">{openedTrip?.level}</span>
                        </div>
                    </div>
                    <div className="trip__description">
                        {openedTrip?.description}
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">{openedTrip?.price}</strong>
                    </div>
                    <button className="trip__button button" onClick={() => setModalOpen(true)}>Book a trip</button>
                </div>
            </div>
        </main>
    );
};

export default TripPage;