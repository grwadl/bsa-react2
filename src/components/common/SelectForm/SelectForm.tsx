import React, {ChangeEvent, FC} from 'react';
import MySelect, {IOption} from "../MySelect/MySelect";

interface IProps {
    durationOptions: IOption[],
    changeFilter: (e: ChangeEvent<HTMLSelectElement>) => void,
    levelOptions: IOption[]
}

const SelectForm:FC<IProps> = ({durationOptions, changeFilter,  levelOptions}) => {
    return (
        <>
            <label className="select">
                <span className="visually-hidden">Search by duration</span>
                <MySelect name='duration' options={durationOptions} onChange={changeFilter} />
            </label>
            <label className="select">
                <span className="visually-hidden">Search by level</span>
                <MySelect name='level' options={levelOptions} onChange={changeFilter} />
            </label>
        </>
    );
};

export default SelectForm;