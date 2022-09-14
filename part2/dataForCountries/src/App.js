import axios from 'axios';
import { useEffect, useState } from 'react';
import ContentCard from './components/ContentCard';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchField, setSearchField] = useState('');

  const searchInputHandler = (e) => {
    const searchFieldString = e.target.value;
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) =>
      country.name.common.includes(searchField)
    );
    setFilteredCountries(newFilteredCountries);
  }, [countries, searchField]);

  useEffect(() => {
    const countryData = axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      <label htmlFor="">Find countries:</label>
      <input type="text" onChange={searchInputHandler} />
      {console.log(filteredCountries)}
      {filteredCountries.map((country) => (
        <>
          <p key={country.area}>{country.name.common}</p>
          <ContentCard country={country} />
        </>
      ))}
    </div>
  );
};

export default App;
