import React from 'react';
import './CountryList.css';



const CountryList = ({country, onCountryClick}) => {

    const handleClick = function(){
        onCountryClick(country);
    }

    return (
        <>
    
        <li onClick={handleClick}>{country.name.common} </li>
        <li> Population: {country.population}</li>
        </>
    )
}

export default CountryList;