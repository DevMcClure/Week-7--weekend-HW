import React from 'react';
import CountryList from './CountryList'

const CountriesList = ({countries, onCountryClick}) => {

    const countriesItems = countries.map((country, index) => {
        return <CountryList country={country} key={index} onCountryClick={onCountryClick} />
    })
    
    return (
        <div>
            <ul>
                
                {countriesItems}
            </ul>
        </div>
    )
}

export default CountriesList;