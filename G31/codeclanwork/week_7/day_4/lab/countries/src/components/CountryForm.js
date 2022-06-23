import React, {useState} from "react";

const CountryForm = ({onCountrySubmit}) => {

  const [country, setCountry] = useState("");
  const [text, setText] = useState("");

  const handleCountryChange = (evt) => {
    setCountry(evt.target.value);
  }

  const handleTextChange = (evt) => {
    setText(evt.target.value);
  }

  const handleCountrySubmit = (evt) => {
    evt.preventDefault();
    const countryToSubmit = country.trim();
    const textToSubmit = text.trim();
    if (!countryToSubmit || !textToSubmit){
      return
    }

    onCountrySubmit({
      country: countryToSubmit,
      text: textToSubmit
    });

    setCountry("");
    setText("");
  }

  return (
    <form onSubmit={handleCountrySubmit}>
      <input 
        type="text"
        placeholder="Your Favourite Country"
        value={country}
        onChange={handleCountryChange}
      />
      <input 
        type="text"
        placeholder="Why is it your favourite Country?"
        value={text}
        onChange={handleTextChange}
      />
      <input 
        type="submit"
        value="Post"
      />
    </form>
  )

}

export default CountryForm;