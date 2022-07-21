import {IBookedTrip} from "../types/types";
import {useMemo} from "react";

export const useSortBookings = (booked: IBookedTrip[]) => {
    const sortedBookings: IBookedTrip[] = useMemo(() => {
        return [...booked]?.sort((a, b) =>
            Number(new Date(a.date).getTime()) - Number(new Date(b.date).getTime()));
    }, [booked]);
    return sortedBookings;
}