import React from 'react';
import CountryContainer from '../containers/CountryContainer';

const CountryDetail = ({selectedCountry}) => {
    return (

        <div>
            <h3>{selectedCountry.name.common}</h3>
            <p>{selectedCountry.population}</p>
        </div>
    )
}

export default CountryDetail;