import {useTypedDispatch} from "../redux/hooks/hooks";
import {useEffect} from "react";
import {loginAgain, stopLoader} from "../redux/actions/login/loginAction";

export const useCheckToken = () => {
    const dispatch = useTypedDispatch();
    useEffect(() => {
        const possibleToken = localStorage.getItem('token');
        possibleToken ? dispatch(loginAgain(possibleToken)) : dispatch(stopLoader);
    }, []);
}