import {createAction} from "@reduxjs/toolkit";
import {errorEnum} from "../../../enums/actions/error/errorEnum";

export const errorHandlingAction = createAction(errorEnum.handleError, (statusCode: string) => {
    return { payload: statusCode }
})