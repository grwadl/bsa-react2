import {useMemo} from "react";
import {IBookedTrip} from "../types/types";

export const useNormalDate = (booked: IBookedTrip): string => {
    const dateNormal = useMemo(() => {
        const date: Date = new Date(booked.date);
        const day: string = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate().toString();
        const month: string = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth().toString();
        const year: string = date.getFullYear().toString();
        return `${day}.${month}.${year}`;
    }, [booked]);
    return dateNormal
}