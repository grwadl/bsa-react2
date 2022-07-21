import React, {FC} from 'react';
import './SignButton.scss'

interface IProps {
    text: string,
    isValid: boolean
}

const SignButton:FC<IProps> = ({text, isValid}) => {
    return (
        <button className="button" disabled={!isValid} type="submit">{text}</button>
    );
};

export default SignButton;