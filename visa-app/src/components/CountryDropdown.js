import {useState} from "react";
import countries from "country-list";
import "./CountryDropdown.css"


function CountryDropdown({label, onSelect}){
    const [reqCountry, setReqCountry] = useState("");
    const countryNames = countries.getNames();
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleInputChange = (e) =>{
        const value = e.target.value; 
        setReqCountry(value);
        if(value.length>0)
        {
            const filtered = countryNames.filter((country) =>
            country.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredCountries(filtered);
        }
        else{
            setFilteredCountries([]);
        }
    };

    const handleSelectCountry = (country) => {
        setReqCountry(country);
        setFilteredCountries([]);
        onSelect(country);
    }

    return(
        <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <input
        type="text"
        placeholder="Enter country name"
        value={reqCountry}
        onChange={handleInputChange}
        className="country-input"
      />
      {filteredCountries.length > 0 && (
        <ul className="dropdown-list">
          {filteredCountries.map((country, index) => (
            <li key={index} onClick={() => handleSelectCountry(country)}>
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>

    );
}

export default CountryDropdown;