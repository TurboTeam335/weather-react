import React from 'react';
import getWeatherIcon from '../../utils/weatherIcons';
import { getWeatherDetails } from '../../utils/weatherInfo';
import { WeatherCardContainer } from '../../styles/WeatherComponents';
import { styled } from '@mui/system';
import theme from '../../styles/theme';

const capitalizeFirstLetter = string => {
  return string.replace(/\b\w/g, char => char.toUpperCase());
};

const WeatherCard = ({ weatherData, temperatureUnit }) => {
  const weatherDetails = getWeatherDetails(weatherData, temperatureUnit);
  if (!weatherDetails) return null;

  const { weather, main } = weatherDetails;
  const temperature = Math.floor(main.temp);
  const iconClass = getWeatherIcon(weather[0].icon);
  const description = capitalizeFirstLetter(weather[0].description);

  return (
    <WeatherCardContainer>
      <i className={`wi ${iconClass} weather-icon-gradient`} />
      <div>
        <p className='temperature'>
          {temperature}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
        </p>
        <div className='description-container'>
          <p className='feels-like-description'>
            Feels Like {Math.floor(weatherDetails.main.feels_like)}°
            {temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
          </p>
          <p className='feels-like-description'>{description}</p>
        </div>
      </div>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
