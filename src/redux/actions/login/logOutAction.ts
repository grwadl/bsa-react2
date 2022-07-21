import {createAction} from "@reduxjs/toolkit";
import {actionEnum} from "../../../enums/actions/login/actionEnum";

export const logOutAction = createAction(actionEnum.logOut, () => {
    return {payload: null}
})