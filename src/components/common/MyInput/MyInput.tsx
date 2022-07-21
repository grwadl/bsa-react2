import React, {ChangeEvent, FC} from 'react';
import './MyInput.scss';

interface IProps {
    name: string,
    type: string,
    labelText: string,
    value: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const MyInput:FC<IProps> = ({name, type, labelText, onChange, value}) => {
    return (
        <label className="trip-popup__input input">
            <span className="input__heading">{labelText}</span>
            <input name={name} value={value}  type={type} required onChange={onChange} />
        </label>
    );
};

export default MyInput;