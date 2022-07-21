import React, {ChangeEvent, FC} from 'react';
import {durationOptions, levelOptions} from "./options";
import SelectForm from "../SelectForm/SelectForm";
import SearchForm from "../SearchForm/SearchForm";
import './FilterMenu.scss';

interface IProps {
    changeFilter: (e: ChangeEvent<HTMLSelectElement>) => void,
    setSearchedValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const FilterMenu: FC<IProps> = ({changeFilter, setSearchedValue}) => {
    return (
        <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off">
                <SearchForm setSearchedValue={setSearchedValue} />
                <SelectForm durationOptions={durationOptions} changeFilter={changeFilter} levelOptions={levelOptions} />
            </form>
        </section>
    );
};

export default FilterMenu;