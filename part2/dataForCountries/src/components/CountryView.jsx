import React from 'react';

const CountryView = ({ country }) => {
  const cleanedLanguages = [];
  for (const key in country.languages) {
    cleanedLanguages.push(country.languages[key]);
  }

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
      <p>Area: {country.area}</p>
      <img src={`${country.flags.png}`} alt="" />
      <h3>Languages: </h3>
      <ul>
        {cleanedLanguages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
    </>
  );
};

export default CountryView;
