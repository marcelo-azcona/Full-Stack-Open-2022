import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const WeatherView = ({ country }) => {
  const { latlng } = country;
  const [lat, lng] = latlng;
  console.log(lat);

  useEffect(() => {
    const weatherData = axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API_KEY}`
      )
      .then((response) => console.log(response));
  }, []);

  return (
    <>
      <h2>Weather</h2>
      <p></p>
      <img src="" alt="" />
      <p></p>
    </>
  );
};

export default WeatherView;
