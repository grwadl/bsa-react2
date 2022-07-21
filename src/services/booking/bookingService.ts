import {deleteReq, getWithToken, postWithToken} from "../http/http";
import {urlEnum} from "../../enums/urlEnum";
import {IBookedTrip, IError} from "../../types/types";

interface IData {
    tripId: string,
    userId: string,
    guests: number,
    date: string
}

export class BookingService {

    static bookTrip = async(token: string | null, data: IData): Promise<IBookedTrip | IError> => {
        const trip = await postWithToken(data, token as string, urlEnum.bookings);
        return await trip.json();
    }

    static getBooked = async(token: string): Promise<IBookedTrip[] | IError> => {
        const booked = await getWithToken(token, urlEnum.bookings);
        return await booked.json();
    }

    static deleteBooked = async(token: string, bookingId: string):Promise<any> => {
        return await deleteReq(token, `${urlEnum.bookings}/${bookingId}`)
    }
}