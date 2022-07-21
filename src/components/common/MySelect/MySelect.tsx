import React, {ChangeEvent, FC} from 'react';
import './MySelect.scss';

export interface IOption {
    value: string,
    text: string
}

interface ISelectType {
    name: string,
    options: IOption[],
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const MySelect:FC<ISelectType> = ({name, options, onChange}) => {
    return (
        <select name={name} onChange={e => onChange(e)}>
            {options.map(op => <option key={op.text} value={op.value}>{op.text}</option>)}
        </select>
    );
};

export default MySelect;