import React from 'react';
import WeatherCard from './Weather/WeatherCard';
import WeatherInfoCard from './Weather/WeatherInfoCard';

const ParentComponent = ({ weatherData }) => {
  return (
    <div style={{ display: 'flex' }}>
      <WeatherCard weatherData={weatherData} />
      <WeatherInfoCard weatherData={weatherData} />
    </div>
  );
};

export default ParentComponent;
