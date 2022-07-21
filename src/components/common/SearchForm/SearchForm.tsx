import React, {ChangeEvent, FC} from 'react';

interface IProps {
    setSearchedValue: (e:ChangeEvent<HTMLInputElement>) => void
}

const SearchForm:FC<IProps> = ({setSearchedValue}) => {
    return (
        <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input onChange = {setSearchedValue} name="search" type="search" placeholder="search by title"/>
        </label>
    );
};

export default SearchForm;