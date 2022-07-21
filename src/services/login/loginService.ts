import {getWithToken, post} from "../http/http";
import {IFullUserData} from "../../redux/actions/login/loginAction";
import {IUser} from "../../redux/reducers/userReducer";
import {IError} from "../../types/types";

export const baseURL: string = 'https://travel-app-api.glitch.me/api/v1/';

interface UserFields {
    email: string,
    password: string,
    fullName?: string
}

export class LoginService {
    static loginReq = async(data: UserFields, URL: string):Promise<IFullUserData | IError> => {
        const res =  await post(data, URL);
        return await res.json();
    }

    static checkToken = async(token: string, URL: string):Promise<IUser | IError> => {
        const res =  await getWithToken(token, URL);
        return await res.json();
    }
}

