import React from 'react';
import getWeatherIcon from '../../utils/weatherIcons';
import { getWeatherDetails } from '../../utils/weatherInfo';

const WeatherCard = ({ weatherData, temperatureUnit }) => { 
  const weatherDetails = getWeatherDetails(weatherData, temperatureUnit); 
  if (!weatherDetails) return null;

  const { city, date, weather, main } = weatherDetails;
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const temperature = Math.floor(main.temp);
  const iconClass = getWeatherIcon(weather[0].icon);

  return (
    <div>
      <h1>{city}</h1>
      <p>{formattedDate}</p>
      <i className={`wi ${iconClass} weather-icon-gradient`} />
      <p>{Math.floor(weatherDetails.main.temp)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p> {/* Adjust unit */}
      <p>Feels Like {Math.floor(weatherDetails.main.feels_like)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p> {/* Adjust unit */}
      <p>{weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
