import React, {ReactElement} from "react";
import SignUp from "../components/page/SignUp/SignUp";
import SignIn from "../components/page/SignIn/SignIn";
import Bookings from "../components/page/Bookings/Bookings";
import TripPage from "../components/page/TripPage/TripPage";
import MainPage from "../components/page/MainPage/MainPage";

export enum PathEnum {
    signUp = 'sign-up',
    signIn = 'sign-in',
    bookings  = 'bookings',
    tripInfo = 'trip/:tripId',
    notFound = '/*'
}

export interface IRoute {
    path?: PathEnum,
    element: ReactElement,
    index?: boolean
}
export const publicRoutes: IRoute[] = [
    {path: PathEnum.signUp, element: <SignUp/>},
    {path: PathEnum.signIn, element: <SignIn/>},
    {path: PathEnum.notFound, element: <SignIn/>},
    {index: true, element: <SignIn/>}
];
export const privateRoutes: IRoute[] = [
    {path: PathEnum.bookings, element: <Bookings/>},
    {path: PathEnum.tripInfo, element: <TripPage/>},
    {path: PathEnum.notFound, element: <MainPage/>},
    {index: true, element: <MainPage/>}
];