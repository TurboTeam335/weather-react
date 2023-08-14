import React from 'react';
import getWeatherIcon from '../../utils/weatherIcons';
import { Box } from '@mui/material';

const HourlyForecast = ({ weatherData, temperatureUnit }) => {
  if (!weatherData || !weatherData.list) {
    return null;
  }

  const { list } = weatherData;
  const currentTime = new Date();
  const currentTimeUTC = new Date(
    currentTime.getTime() + currentTime.getTimezoneOffset() * 60000
  );

  const upcomingForecasts = list
    .filter(forecast => {
      const forecastTime = new Date(forecast.dt_txt);
      return forecastTime >= currentTimeUTC;
    })
    .slice(0, 8);

  console.log('upcomingForecasts:', upcomingForecasts);

  return (
    <Box display='flex' flexWrap='wrap'>
      {upcomingForecasts.map((forecast, index) => {
        const date = new Date(forecast.dt_txt);
        const hours = date.getHours();
        const period = hours < 12 ? 'am' : 'pm';
        const displayHour = hours % 12 === 0 ? 12 : hours % 12;
        const temperature =
          temperatureUnit === 'fahrenheit'
            ? Math.floor(forecast.main.temp)
            : Math.floor(((forecast.main.temp - 32) * 5) / 9);

        const iconClass = getWeatherIcon(forecast.weather[0].icon);

        return (
          <Box
            key={index}
            display='flex'
            flexDirection='column'
            width={{ xs: '50%', sm: '25%', md: '12.5%' }}
          >
            <p>
              {displayHour}
              {period}
            </p>
            <i className={`wi ${iconClass} weather-icon-gradient`} />
            <p>
              {temperature}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
            </p>
          </Box>
        );
      })}
    </Box>
  );
};

export default HourlyForecast;
