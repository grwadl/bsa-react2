import React, {ChangeEvent, FC, useState} from 'react';
import {Link} from "react-router-dom";
import {useValidateForm, validateType} from "../../../hooks/useValidateForm";
import MyInput from "../../common/MyInput/MyInput";
import SignButton from "../../common/SignButton/SignButton";
import '../SignIn/SignIn.scss';
import {ToastContainer} from "react-toastify";

const SignUp: FC = () => {
    const [loginValue, setLoginValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const setEmail = (e: ChangeEvent<HTMLInputElement>): void => setLoginValue(e.target.value);
    const setPass = (e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value);
    const setName = (e: ChangeEvent<HTMLInputElement>): void => setFullName(e.target.value);
    const [isValid, onSubmitForm]: validateType = useValidateForm(password);
    return (
        <main className="sign-up-page">
            <ToastContainer />
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-up-form" autoComplete="off" onSubmit={e => onSubmitForm(e, fullName, loginValue, password)}>
                <h2 className="sign-up-form__title">Sign Up</h2>
                <MyInput name={'full-name'} type={'text'} labelText={'Full name'} value={fullName}
                         onChange={e => setName(e)}/>
                <MyInput name={'email'} type={'email'} labelText={'Email'} value={loginValue}
                         onChange={e => setEmail(e)}/>
                <MyInput name={'password'} type={'password'} labelText={'Email'} value={password}
                         onChange={e => setPass(e)}/>
                <SignButton text='Sign Up' isValid={isValid}/>
            </form>
            <span>
        Already have an account?
        <Link to="/sign-in" className="sign-up-form__link">Sign In</Link>
      </span>
        </main>
    );
};

export default SignUp;