import {FormEvent, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {store} from "../redux/store/store";
import {useTypedDispatch} from "../redux/hooks/hooks";
import {createUser} from "../redux/actions/login/createAction";
import {IinitialState} from "../redux/reducers/userReducer";
import {loginUserAction} from "../redux/actions/login/loginAction";

type submitFunc = (e: FormEvent<HTMLFormElement>, fullName: string, email: string, password: string) => void
export type validateType = [boolean, submitFunc, submitFunc];

export const useValidateForm = (password: string): validateType => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const isValid: boolean = useMemo(() => {
        return (password.length > 3 && password.length < 20)
    }, [password]);
    const onSubmitRegForm = async (e: FormEvent<HTMLFormElement>, fullName: string, email: string, password: string): Promise<void> => {
        e.preventDefault();
        await dispatch(createUser({fullName, email, password}));
        const user: IinitialState = store.getState().login;
        if (user?.user?.fullName) {
            localStorage.setItem('token', user.token as string);
            navigate('/', {replace: true});
        }
    }

    const onSubmitLoginForm = async (e: FormEvent<HTMLFormElement>, fullName: string, email: string, password: string): Promise<void> => {
        e.preventDefault();
        await dispatch(loginUserAction({email, password}))
        const user: IinitialState = store.getState().login;
        if (user?.user?.fullName) {
            localStorage.setItem('token', user.token as string);
            navigate('/', {replace: true});
        }
    }
    return [isValid, onSubmitRegForm, onSubmitLoginForm];
}