import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';
import CountryForm from '../components/CountryForm';
import './CountryContainer.css';


const CountryContainer = () => {
    const [countries, setCountries] = useState ([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState ([]);

    useEffect(() => {
        getCountries();
    }, [])


    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    // const onCountrySelected = function(country){
    //     setSelectedCountry(country);
    // }

    const addCountry = (submittedCountry) => {
        submittedCountry.id = Date.now();
        const updatedCountries = [...favouriteCountries, submittedCountry];
        setFavouriteCountries(updatedCountries);
      }








    return (
        <div className="main=container">
            {<CountriesList countries={countries} onCountryClick={onCountryClick} /> }
            {/* <CountrySelector countries={countries} onCountriesSelected={onCountrySelected} /> */}
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/>: null}
            <CountryForm onCountrySubmit={(country) => addCountry(country)}/>
    
        </div>
    )


}

export default CountryContainer;