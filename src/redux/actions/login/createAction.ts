import {createAsyncThunk} from "@reduxjs/toolkit";
import {urlEnum} from "../../../enums/urlEnum";
import {actionEnum} from "../../../enums/actions/login/actionEnum";
import {toast} from "react-toastify";
import {IFullUserData} from "./loginAction";
import {AsyncThunkConfig} from "../../store/store";
import {IError} from "../../../types/types";

interface LoginData {
    fullName: string,
    password: string,
    email: string
}

export const createUser =
    createAsyncThunk<IFullUserData, LoginData, AsyncThunkConfig>(actionEnum.registration, async (data, { rejectWithValue, extra: { LoginService } }) => {
        try {
            const response: IFullUserData | IError = await LoginService.loginReq(data, urlEnum.register)
            if ("error" in response && response.error) {
                toast.error(response.message)
                throw new Error();
            }
            return response as IFullUserData;
        }
        catch (e) {
            return rejectWithValue('err')
        }
    })