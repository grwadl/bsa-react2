import {useMemo} from "react";
import {ITrip} from "../types/types";

export interface IFilter {
    duration: string,
    level: string
}

export const useFiltration = (trips: ITrip[], filters:IFilter):ITrip[] => {
    const filteredTrips = useMemo(() => {
        let filteredArr:ITrip[] = trips;
        if (!filters.duration && !filters.level) {
            return filteredArr;
        }
        if (filters.duration) {
            const greaterAndSmaller:string[] = filters.duration.split(/_x|_/).filter(item => item && item !=='_');
            filteredArr =  greaterAndSmaller.length === 2
                ? filteredArr.filter(item => item.duration > Number(greaterAndSmaller[0]) && item.duration < Number(greaterAndSmaller[1]))
                : filteredArr.filter(item => item.duration >= Number(greaterAndSmaller[0]))
        }
        if (filters.level) {
            filteredArr = filteredArr.filter(item => item.level === filters.level);
        }
        return filteredArr;
    }, [filters, trips]);
    return filteredTrips;
}