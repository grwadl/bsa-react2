import {createReducer, isAnyOf} from "@reduxjs/toolkit";
import {createUser} from "../actions/login/createAction";
import {logOutAction} from "../actions/login/logOutAction";
import {loginAgain, loginUserAction, stopLoader} from "../actions/login/loginAction";
import {errorHandlingAction} from "../actions/errorHandling/errorHandlingAction";

export interface IUser {
    id: string,
    fullName: string,
    email: string,
    createdAt: string
}

export interface IinitialState {
    token: string | null,
    user: IUser | null,
    isLoading: boolean
}

const initialState: IinitialState = {
    token: null,
    user: null,
    isLoading: true
}

export const loginReducer = createReducer(initialState, (builder) => {
        builder.addCase(errorHandlingAction, (state, action) => {
            const statusCode = action.payload;
            state.isLoading = false;
            if (Number(statusCode) === 401) {
                state.user = null;
                state.token = null;
            }
        });
        builder.addCase(stopLoader, (state, action) => {
            state.isLoading = false;
        })
        builder.addMatcher(
                isAnyOf(
                    createUser.fulfilled,
                    loginUserAction.fulfilled,
                    loginAgain.fulfilled
                ), (state, action) => {
                    const {user, token} = action.payload;
                    state.user = user;
                    state.token = token;
                    state.isLoading = false;
                })
        builder.addMatcher(
            isAnyOf(
                createUser.rejected,
                logOutAction,
                loginUserAction.rejected,
                loginAgain.rejected,
            ), (state, action) => {
                state.user = null;
                state.token = null;
                state.isLoading = false;
            })
    }
)