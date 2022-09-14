import React from 'react';
import { useState } from 'react';
import CountryView from './CountryView';
import WeatherView from './WeatherView';

const ContentCard = ({ country }) => {
  const [contentIsShow, setContentIsShow] = useState(false);

  const toggleContentHandler = () => {
    setContentIsShow(() => !contentIsShow);
  };

  return (
    <>
      <button onClick={toggleContentHandler}>Show</button>
      {contentIsShow && <CountryView country={country} />}
      {contentIsShow && <WeatherView country={country} />}
    </>
  );
};

export default ContentCard;
