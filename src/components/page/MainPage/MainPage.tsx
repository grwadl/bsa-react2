import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {ITrip} from "../../../types/types";
import FilterMenu from "../../common/FilterMenu/FilterMenu";
import {IFilter, useFiltration} from "../../../hooks/useFiltration";
import {useSearch} from "../../../hooks/useSearch";
import TripList from "../../common/TripList/TripList";
import {useTypedDispatch, useTypedSelector} from "../../../redux/hooks/hooks";
import {fetchTrips} from "../../../redux/actions/trips/tripsAction";
import {unwrapResult} from "@reduxjs/toolkit";
import {errorHandlingAction} from "../../../redux/actions/errorHandling/errorHandlingAction";
import {ToastContainer} from "react-toastify";
import Loader from "../../common/Loader/Loader";
import {useTripsRequest} from "./useTripsRequest";

const MainPage: FC = () => {
    const [filters, setFilters] = useState<IFilter>({
        duration: '',
        level: ''
    });
    const { isLoading, trips } = useTypedSelector(state => state.trips);
    const [searchedValue, setSearchedValue] = useState<string>('');
    const changeFilter = (e:ChangeEvent<HTMLSelectElement>):void => setFilters({...filters, [e.target.name]: e.target.value});
    const changeSearch = (e:ChangeEvent<HTMLInputElement>):void =>  setSearchedValue(e.target.value);
    const filteredTrips: ITrip[] = useFiltration(trips, filters);
    const filteredAndSearchedTrips: ITrip[] = useSearch(filteredTrips, searchedValue);
    useTripsRequest();
    if(isLoading) {
        return  <main><Loader /></main>
    }
    return (
        <main>
            <ToastContainer />
            <FilterMenu changeFilter={changeFilter} setSearchedValue={changeSearch} />
            <TripList filteredAndSearchedTrips={filteredAndSearchedTrips} />
        </main>
    );
};

export default MainPage;