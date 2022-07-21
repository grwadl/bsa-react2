import {IError, ITrip} from "../../types/types";
import {getWithToken} from "../http/http";
import {urlEnum} from "../../enums/urlEnum";

export class TripService {
    static fetchTrips = async(token: string):Promise<ITrip[] | IError> => {
        const res = await getWithToken(token, urlEnum.fetchTrips);
        return await res.json()
    }

    static fetchTripById = async(token: string, id:string):Promise<ITrip | IError> => {
        const res = await getWithToken(token, `${urlEnum.fetchTrips}/${id}`);
        return await res.json()
    }
}