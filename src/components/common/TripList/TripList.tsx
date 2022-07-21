import React, {FC} from 'react';
import Card from "../Card/Card";
import {ITrip} from "../../../types/types";
import './TripList.scss';

interface IProps {
    filteredAndSearchedTrips: ITrip[]
}

const TripList: FC<IProps> = ({filteredAndSearchedTrips}) => {
    return (
        <section className="trips">
            <ul className="trip-list">
                {filteredAndSearchedTrips?.map(trip => <Card key={trip.id} trip={trip}/>)}
            </ul>
        </section>
    );
};

export default TripList;