import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {urlEnum} from "../../../enums/urlEnum";
import {actionEnum} from "../../../enums/actions/login/actionEnum";
import {IUser} from "../../reducers/userReducer";
import {toast} from "react-toastify";
import {AsyncThunkConfig} from "../../store/store";
import {IError} from "../../../types/types";

interface LoginData {
    password: string,
    email: string
}

export interface IFullUserData {
    token: string,
    user: IUser
}

export const loginUserAction = createAsyncThunk<IFullUserData, LoginData, AsyncThunkConfig>
(actionEnum.login, async (data, { rejectWithValue, extra: { LoginService } }) => {
    try {
        const response: IFullUserData | IError = await LoginService.loginReq(data, urlEnum.login);
        if ("error" in response && response.error) {
            toast.error(response.message);
            throw response.statusCode;
        }
        return response as IFullUserData;
    } catch (e) {
        return rejectWithValue(e)
    }
});

export const loginAgain = createAsyncThunk<IFullUserData, string, AsyncThunkConfig>(actionEnum.loginAgain, async(token: string, { rejectWithValue,  extra: { LoginService } }) => {
    try {
        const response: IUser | IError = await LoginService.checkToken(token, urlEnum.checkToken);
        if ("error" in response && response.error) {
            toast.error(response.message);
            throw new Error();
        }
        return {user: (response as IUser), token};
    } catch (e) {
        return rejectWithValue(e)
    }
});

export const stopLoader = createAction(actionEnum.stopLoader,() => {
    return {payload:false}
})