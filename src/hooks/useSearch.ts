import {useMemo} from "react";
import {ITrip} from "../types/types";

export const useSearch = (filteredTrips:ITrip[], searchedValue: string): ITrip[] => {
    let filteredAndSearchedTrips: ITrip[] = useMemo(() => {
        return filteredTrips.filter(item => item.title.toLowerCase().includes(searchedValue.toLowerCase()));;
    }, [filteredTrips, searchedValue]);
    return filteredAndSearchedTrips;
}