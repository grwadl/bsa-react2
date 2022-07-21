import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "../reducers/userReducer";
import {tripReducer} from "../reducers/tripReducer";
import {bookedReducer} from "../reducers/bookedReducer";
import { BookingService } from "../../services/booking/bookingService";
import {LoginService} from "../../services/login/loginService";
import {TripService} from "../../services/trip/tripService";

const extraArgument = {
    BookingService,
    LoginService,
    TripService
};

export const store = configureStore({
    reducer : {
        login: loginReducer,
        trips: tripReducer,
        booked: bookedReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument,
        }
    })
})

type AsyncThunkConfig = {
    state: RootState;
    dispatch: AppDispatch;
    extra: typeof extraArgument;
};

export { type AsyncThunkConfig };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;