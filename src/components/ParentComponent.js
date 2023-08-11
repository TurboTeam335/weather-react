import React from 'react';
import WeatherCard from './weather/WeatherCard';
import WeatherInfoCard from './weather/WeatherInfoCard';

const ParentComponent = ({ weatherData }) => {
  return (
    <div style={{ display: 'flex' }}>
      <WeatherCard weatherData={weatherData} />
      <WeatherInfoCard weatherData={weatherData} />
    </div>
  );
};

export default ParentComponent;
